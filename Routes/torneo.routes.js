import express from "express"; 

const router = express.Router();

// Muestra todos los torneos 
router.get('/torneo', (req, res) => {
  res.json({ 
    message: 'Esta es la ruta GET de mi entidad TORNEO' 
   });
});

//Mensaje con ID
router.get('/torneo/:id', (req, res) =>{
    res.json({
        menssage: 'Esta es la ruta GET de mi entidad TORNEO con la ID: ${req.params.id}'
    });
});

// Crear un nuevo torneo 
router.post('/torneo', (req, res) => {
  res.json({ 
    message: 'Esta es la ruta POST de mi entidad TORNEO' 
   });
});

// Modifica un torneo por su ID 
router.put('/torneo/:id', (req, res) => {
  res.json({ 
    message: `Esta es la ruta PUT de mi entidad TORNEO con el ID: ${req.params.id}` 
   });
});

// Elimina un torneo por su ID 
router.delete('/partida/:id', (req, res) => {
  res.json({ 
    message: `Esta es la ruta DELETE de la entidad TORNEO con la id: ${req.params.id}` 
   });
});

export default router; //se exporta para llamarlo al index.js