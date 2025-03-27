'use strict';


import express from 'express'; // Traemos el paquete express
const app = express();             // Creamos una instancia de express
const PORT = 3000;                 // Definimos el puerto en el que se ejecutará el servidor

app.get('/', ( req, res ) => {
    res.send('Hola Mundo');
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
