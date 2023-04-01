const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const sequelize = require('./../config/db')

const Curso = sequelize.define('Curso', {
    // Model attributes are defined here
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    precio: {
      type: DataTypes.INTEGER,
       allowNull: false
    },
    capacidad: {
        type: DataTypes.INTEGER,
         allowNull: false
      },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
      },

  })

  Curso.sync();

  module.exports(Curso)
  