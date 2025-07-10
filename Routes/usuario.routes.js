import express from 'express'

const router = express.Router();

//Obtener todos los Usuarios
router.get ('/usuario', (req, res) => {
  res.json({
  message: 'Esta es la ruta GET para la entidad USUARIO'
  });
});

//mensaje con recepcion de ID
router.get ('/usuario:id' ,(req, res) =>{
 res.json({
    message: 'Esta es la ruta GET para la entidad USUARIO con la ID: ${req.params.id}'
 });
});

//Mensaje de creacion 
router.post ('/usuario:id', (req, res) =>{
 res.json({
    message: 'Esta es la ruta POST para la entidad USUARIO con el ID:'
 });
});

//Mensaje con ID (put)
router.put ('/usuario:', (req, res) =>{
 res.json({
    message: 'Esta es la ruta PUT para la entidad USUARIO con el ID: ${req.params.id}'
 });
});

//Mensaje con ID (delete)
router.delete ('/usuario', (req, res) =>{
 res.json({
    message: 'Esta es la ruta DELETE para la entidad USUARIO con el ID: ${req.params.id}'
 });
});

export default router; // Se exporta para llamarlo al index.js 