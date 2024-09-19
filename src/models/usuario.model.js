const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/connection.js');
const { Domicilio } = require('./domicilio.model.js');


const Usuario = sequelize.define('Usuario',
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    codigo:{
      type:DataTypes.STRING,
      allowNull:true
    },
    exp_cod:{
      type:DataTypes.DATE,
      allowNull: true
    }
    
  },
  {
    timestamps: true,
  },
);

//Relacion usuario y cita
//has one

//Relacion usuario y domicilio
Usuario.hasMany(Domicilio, {foreignKey: 'usuarioId', sourceKey: 'id', as: 'domicilio'});
Domicilio.belongsTo(Usuario, {foreignKey: 'usuarioId', targetKey: 'id', as: 'usuario'});

module.exports = { Usuario };