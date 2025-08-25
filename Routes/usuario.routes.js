import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Middleware para manejar excepciones en promesas asincrónicas
const asyncHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// GET /usuario
router.get('/', asyncHandler(async (req, res) => {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
}));

// GET /usuario/:id
router.get('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const usuario = await prisma.usuario.findUnique({
    where: { id_usuario: parseInt(id) },
  });
  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).json({ error: 'Usuario no encontrado.' });
  }
}));

// POST /usuario
router.post('/', asyncHandler(async (req, res) => {
  const { email, nombre, contrasena, ELO } = req.body;
  if (!email || !nombre || !contrasena) {
    return res.status(400).json({ error: 'Faltan campos obligatorios: email, nombre y contrasena.' });
  }
  const nuevoUsuario = await prisma.usuario.create({
    data: {
      email,
      nombre,
      contrasena,
      ELO,
    },
  });
  res.status(201).json(nuevoUsuario);
}));

// PUT /usuario/:id
router.put('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { email, nombre, contrasena, ELO } = req.body;
  const usuarioActualizado = await prisma.usuario.update({
    where: { id_usuario: parseInt(id) },
    data: {
      email,
      nombre,
      contrasena,
      ELO,
    },
  });
  res.json(usuarioActualizado);
}));

// DELETE /usuario/:id
router.delete('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;
  await prisma.usuario.delete({
    where: { id_usuario: parseInt(id) },
  });
  res.status(204).send();
}));

export default router;