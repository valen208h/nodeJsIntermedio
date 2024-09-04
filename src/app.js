// llama a express, decirle a mi aplicativo que tipo voy a usar en este caso JSON

//cors metodos que voy a usar
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');


//llamo a cada ruta inicializarla,si enlista es porque esta bien
const jugadorRutas = require('./rutas/rutasJugador');
const niveleRutas = require('./rutas/rutasNivel');
const jugadorNivelRutas = require('./rutas/rutasJugadorNivel')

//cors ciertas opciones desde donde se van a llamar, solo se llame desde ese origen
//no puedo generar certificados, comprar un dominio
const corsOpciones = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
//app.use al principio debe tener la misma estructura
app.use(cors(corsOpciones));

app.use(express.json());

app.use('/api/jugador', jugadorRutas);
app.use('/api/nivel', niveleRutas);
app.use('/api/jugadornivel', jugadorNivelRutas);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});