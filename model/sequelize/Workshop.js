const Sequelize = require("sequelize");
const sequelize = require("../../config/sequelize/sequelize");

const Workshop = sequelize.define(
  "Workshop",
  {
    nazwa: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefon: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    underscored: true,
  }
);

module.exports = Workshop;
