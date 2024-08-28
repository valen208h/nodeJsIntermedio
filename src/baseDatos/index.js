// configurar el archivo dotenv
// instancio sequelize, la clase
//accedo a los archivos

// conexion a la base de datos -> sequelize
// DB es el que esta en el .env
require('dotenv').config();

const { Sequelize,DataTypes } = require('sequelize');
const jugadorModelo = require('../modelos/jugador');
const nivelModelo = require('../modelos/nivel');
const jugadorNivelModelo = require('../modelos/jugadorNivel');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT
    }
  );
// llamo la funcion que tiene instanciado todo el modelo(modelos)
const Jugador = jugadorModelo(sequelize, DataTypes);
const Nivel = nivelModelo(sequelize, DataTypes);
const JugadorNivel = jugadorNivelModelo(sequelize, DataTypes);

//authenticate hace una conexion a la BD, sino genera un error
sequelize.authenticate()
  .then(() => console.log('Conectado a la base de datos.'))
  .catch(err => console.error('No se pudo conectar a la base de datos:', err));

//sync, alter y force -> fuerza los cambios en la BD, solo testing y modo de desarrollo. Produccion BORRARLOS
sequelize.sync({ alter: true, force: false })
  .then(() => console.log('Sincronización completada.'))
  .catch(err => console.error('Error en la sincronización:', err));

// se exporta y se va a utilizar en los controladores
module.exports = {
    Jugador,
    Nivel,
    JugadorNivel,
    sequelize
};


