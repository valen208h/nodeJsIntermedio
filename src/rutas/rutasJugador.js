const express = require('express');
const enrutador = express.Router();
const jugadorControlador = require('../controladores/jugadorControlador');

//mandando informacion es el post (el alias)
enrutador.post('/registrar', jugadorControlador.registrarJugador);
enrutador.get('/obtener',jugadorControlador.obtenerJugadores);
module.exports = enrutador;