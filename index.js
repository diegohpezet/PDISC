import express from 'express';
import partidaRoutes from './Routes/partida.routes.js'; 
import torneoRoutes from './Routes/torneo.routes.js';
import usuarioRoutes from './Routes/usuario.routes.js';
import logger from './middlewares/logger.js'; 
import notFound from './middlewares/error.js'; 
import cors from 'cors';

const app = express();

// Middleware
app.use(express.json()); // para leer JSON
app.use(cors()); // Habilitar CORS
app.use(express.static('public'));

app.use(logger); // Aplica el middleware a todas las rutas

// Rutas de la API
app.use('/partidas', partidaRoutes);
app.use('/torneo', torneoRoutes);
app.use('/usuario', usuarioRoutes);

app.use(notFound); // Manejo de errores 404

// Iniciar el servidor
const hostname = '0.0.0.0'; // Escuchar en todas las interfaces de red
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:${3000}');
});
