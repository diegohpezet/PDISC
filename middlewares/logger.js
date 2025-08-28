function logger(req, res, next) {
 const timestamp = new Date().toISOString(); // imprime la fecha y hora de la petición
 
 const method = req.method; //obtiene el metodo y la url de la peticion
 const url = req.originalUrl;

console.log(`[${timestamp}] ${method} ${url}`);
 
if (Object.keys(req.body).length > 0) { //agrega los datos del body si existen
    console.log('Body:' , req.body);
}
    next();
}

module.exports = logger;