const Sequelize = require("sequelize");
const dataBase = require("../database.js");
const Review = require("./Review.js");

const Calificacion = dataBase.define("calificacion", {
  _id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  contenido: {
    type: Sequelize.STRING(25),
    allowNull: false,
    validate: {
      len: {
        args: [3, 25],
        msg: "La calificacion debe tener entre 3 y 25 caracteres",
      },
      notEmpty: {
        args: true,
        msg: "La calificacion no puede ir vacio",
      },
    },
  },
});
Calificacion.hasOne(Review);

module.exports = Calificacion;
