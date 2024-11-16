const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/connection.js');
const { Catalogo } = require('./catalogo.model.js');

const CategoriaPrendas = sequelize.define('Categoria_Prendas',
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estadoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
  },
  },
  {
    tableName: 'categoria_prendas',
    timestamps: false,
  },
);

//Relacion categoria y catalogo
CategoriaPrendas.hasMany(Catalogo, {foreignKey: 'categoriaId', sourceKey: 'id', as: 'catalogo'});
Catalogo.belongsTo(CategoriaPrendas, {foreignKey: 'categoriaId', targetKey: 'id', as: 'categoria_prendas'});

module.exports = { CategoriaPrendas };