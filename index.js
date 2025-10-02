import express from 'express';
import cors from 'cors';
import notFound from './middlewares/error.js';
import logger from './middlewares/logger.js'; 
import partidaRoutes from './Routes/partida.routes.js'; 
import torneoRoutes from './Routes/torneo.routes.js';
import usuarioRoutes from './Routes/usuario.routes.js';
import authRoutes from './Routes/auth.routes.js';  

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // para leer JSON
app.use(cors());

app.use(express.static('/public')); // Servir archivos estáticos desde la carpeta 'public'
app.use('/auth', authRoutes); // La ruta quedaria POST /auth/register y POST /auth/login

app.use(logger); // Aplica el middleware a todas las rutas

// Ruta para servir la página de inicio
app.get('/', (req, res) => {
  res.sendFile('public/pages/usuario/inicio/index.html', { root: '.' });
});

// Rutas de autenticación
app.use('/auth', authRoutes);

// Rutas de la API
app.use('/partidas', partidaRoutes);
app.use('/torneo', torneoRoutes);
app.use('/usuario', usuarioRoutes);

// Manejo de errores 404
app.use(notFound); 

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Mi aplicacion esta funcionando en http://localhost:${PORT}`);
}) 
