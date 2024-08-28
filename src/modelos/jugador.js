//FUNCION, LA LLAMAMOS EN EL INDEX.JS EN LA BD, TODOS LOS ATRIBUTOS DE LA TABLA JUGADOR
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Jugador', {
        cedula: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:'email'
        }
//SE DEFINEN PARAMETROS DE LA TABLA- SE RESGISTRA LOS CAMBIOS QUE SE HICIERON
}, {
    tableName: 'jugador',
    timestamps: true,
  });
};