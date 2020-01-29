// en este modulo se generaran de manera autimatica ciertos parametros
// de los html del servidor web.
const hbs = require('hbs');

// Helpers
//helper para inicializar la variable getanio con el año actual
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
//helper para que las palabras indicadas con el metodo inicializar queden en mayusculas la primera letra y en minusculas las demas
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() +
            palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});