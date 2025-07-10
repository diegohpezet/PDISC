import express from 'express';
import partidaRoutes from './Routes/partida.routes'; //importa el router
import torneoRoutes from './Routes/torneo.routes';
import usuarioRoutes from './Routes/usuario.routes';

const app = express();
app.use(express.json()); // Middleware para leer JSON

app.use('/partida', partidaRoutes);
app.use('/torneo', torneoRoutes);
app.use('/usuario', usuarioRoutes);

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
