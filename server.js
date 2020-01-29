//se importa la libreria express para generar el servidor web
const express = require('express');
const app = express();
// se importa las librerias hbs para generar las bases de html
const hbs = require('hbs');
//los helpers son ayudas para inicializar parametros dentro de los contenidos
require('./hbs/helpers');
//se inicializa el puerto para el servidor
const port = process.env.PORT || 2000;
//se inicializa el servidor publico
app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');
//llamada central del servidor para inicializar el hbs home
app.get('/', function(req, res) {
    res.render('home', {
        // esta varibale se utilizará dentro del html home
        nombre: "ESTEBAN CARRERA"
    });
});
//se inicialia una llamada tipo get para renderizar el html about
app.get('/about', (req, res) => {
    //res.send('Esta es mi primera web app');
    res.render('about');
});
// se inicializa el servidor en el puerto asignado
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});