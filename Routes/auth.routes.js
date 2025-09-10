import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Router } from "express";
import prisma from "../lib/prisma.js";
import EnviarMensaje from '../services/emails.js';

const router = Router();

//POST /auth/register - registro de usuario 
router.post('/register', async (req, res) => {
  const { email, password, nombre } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10); // El 10 es el número de rondas de salt

  // Validar si el email ya está en uso
  const isEmailTaken = await prisma.usuario.findUnique({
    where: { email },
  });

  if (isEmailTaken) {
    return res.status(400).json({ error: 'Email ya utilizado' });
  }

  const newUser = await prisma.usuario.create({
    data: {
      email,
      password: hashedPassword,
      nombre, 
    },
  });
  await EnviarMensaje.EnviarMensaje(email, nombre); //envia el email de bienvenida

  return res.status(201).json({ message: 'Usuario creado', userId: newUser.id_usuario });
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    //busca al usuario por su email
    const user = await prisma.usuario.findUnique({
        where: { email },
    });

    if (!user) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    //verifica la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    //genera un Token JWT
    const token = jwt.sign({ userId: user.id, email: user.email },
        process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({ message: 'login exitoso', token });
});

export default router;
