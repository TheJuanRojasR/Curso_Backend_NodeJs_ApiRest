'use strict';


import express from 'express'; // Traemos el paquete express
const app = express();             // Creamos una instancia de express
const PORT = 3000;                 // Definimos el puerto en el que se ejecutará el servidor

app.get('/', ( req, res ) => {
    res.send('Hola Mundo');
})

app.get('/new-ruute', ( req, res ) => {
    res.send('Soy un nuevo endpoint');
})

app.get('/products', ( req, res ) => {
    res.json({
        name: 'Producto 1',
        price: 100
    });
})
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
