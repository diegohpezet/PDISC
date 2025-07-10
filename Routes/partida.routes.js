import express from 'express';

const router = express.Router();

// Obtener todas las partidas (GET)
router.get('/partida', (req, res) => {
  res.json({ 
    message: 'Esta es la ruta GET de mi entidad PARTIDA' 
   });
});

//Mensaje con ID
router.get('/partida/:id', (req, res) =>{
    res.json({
        menssage: 'Esta es la ruta GET de mi entidad PARTIDA con el ID: ${req.params.id}'
    });
});

// Crear una nueva partida (POST)
router.post('/partida', (req, res) => {
  res.json({ 
    message: 'Esta es la ruta POST de mi entidad PARTIDA' 
   });
});

// Modificar una partida por su ID (PUT)
router.put('/partida/:id', (req, res) => {
  res.json({ 
    message: `Esta es la ruta PUT de mi entidad PARTIDA con id ${req.params.id}` 
   });
});

// Eliminar una partida por su ID (DELETE)
router.delete('/partida/:id', (req, res) => {
  res.json({ 
    message: `Esta es la ruta DELETE de mi entidad PARTIDA con id ${req.params.id}` 
   });
});

export default router; //se exporta para llamarlo al index.js