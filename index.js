import express from 'express';
import partidaRoutes from './Routes/partida.routes.js'; 
import torneoRoutes from './Routes/torneo.routes.js';
import usuarioRoutes from './Routes/usuario.routes.js';
import logger from './middlewares/logger.js'; 
import notFound from './middlewares/error.js';
import authRoutes from './Routes/auth.routes.js'; 
import verifyToken from './middlewares/auth.js';
import cors from 'cors';

const app = express();

// Middleware
app.use(express.json()); // para leer JSON
app.use('/auth', authRoutes); // La ruta quedaria POST /auth/register y POST /auth/login
app.use(cors()); // Habilitar CORS
app.use(express.static('public'));

app.use(logger); // Aplica el middleware a todas las rutas

// Rutas de la API
app.use('/partidas', partidaRoutes);
app.use('/torneo', torneoRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/auth', authRoutes); // Rutas de autenticación

app.use(notFound); // Manejo de errores 404

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Mi aplicacion esta funcionando en http://localhost:${port}`);
}) 
