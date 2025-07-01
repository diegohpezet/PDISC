// Importamos express
import express from 'express';

const app = express();
app.use(express.json()); // Middleware para leer JSON

// Ruta principal de bienvenida
app.get('/', (req, res) => {
  res.json({ mensaje: 'Bienvenido a la API de MAPTV' });
});

// Rutas para la entidad PARTIDA

// Obtener todas las partidas (GET)
app.get('/partida', (req, res) => {
  res.json({ mensaje: 'Esta es la ruta GET de mi entidad PARTIDA' });
});

// Crear una nueva partida (POST)
app.post('/partida', (req, res) => {
  res.json({ mensaje: 'Esta es la ruta POST de mi entidad PARTIDA' });
});

// Modificar una partida por su ID (PUT)
app.put('/partida/:id', (req, res) => {
  res.json({ mensaje: `Esta es la ruta PUT de mi entidad PARTIDA con id ${req.params.id}` });
});

// Eliminar una partida por su ID (DELETE)
app.delete('/partida/:id', (req, res) => {
  res.json({ mensaje: `Esta es la ruta DELETE de mi entidad PARTIDA con id ${req.params.id}` });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
