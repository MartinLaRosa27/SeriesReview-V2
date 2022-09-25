const Sequelize = require("sequelize");
const dataBase = require("../database.js");

const Review = dataBase.define("review", {
  _id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  
  titulo: {
    type: Sequelize.STRING(25),
    allowNull: false,
    validate: {
      len: {
        args: [3, 25],
        msg: "El titulo de la pelicula debe tener entre 3 y 25 caracteres",
      },
      notEmpty: {
        args: true,
        msg: "El titulo de la pelicula no puede ir vacio",
      },
    },
  },

  contenido: {
    type: Sequelize.STRING(90),
    allowNull: false,
    validate: {
      len: {
        args: [10, 90],
        msg: "La review de la pelicula debe tener entre 10 y 90 caracteres",
      },
      notEmpty: {
        args: true,
        msg: "La review de la pelicula no puede ir vacia",
      },
    },
  },
});

module.exports = Review;
