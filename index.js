// Servidor básico con Express
import express from 'express';  // Importamos express

const app = express();  // Creamos una instancia de express

app.get('/', function (req, res) {  // Creamos una 'ruta' de ejemplo dentro del servidor
  res.send('¡Hola mundo! (pero con Express)');
});

app.listen(3000, () => {  // Iniciamos el servidor
  console.log('Servidor corriendo en http://localhost:3000');
});
