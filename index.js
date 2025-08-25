import express from 'express';
import partidaRoutes from './Routes/partida.routes.js'; 
import torneoRoutes from './Routes/torneo.routes.js';
import usuarioRoutes from './Routes/usuario.routes.js';
import cors from 'cors';

const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.json()); // para leer JSON
app.use(cors()); // para permitir CORS

app.use('/partidas', partidaRoutes);
app.use('/torneo', torneoRoutes);
app.use('/usuario', usuarioRoutes);

app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de gestión de torneos!');
});

// Iniciar el servidor
const hostname = '0.0.0.0'; // Escuchar en todas las interfaces de red
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:${3000}');
});
