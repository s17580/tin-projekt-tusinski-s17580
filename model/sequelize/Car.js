const Sequelize = require("sequelize");
const sequelize = require("../../config/sequelize/sequelize");

const Car = sequelize.define(
  "Car",
  {
    marka: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    typ: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
    numer_rejestracyjny: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    rok_produkcji: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pojemnosc: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

module.exports = Car;
