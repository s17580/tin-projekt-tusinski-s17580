const Sequelize = require("sequelize");
const sequelize = require("../../config/sequelize/sequelize");
const Address = require("./Address");

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
    defaultScope: {
      include: [Address],
    },
  }
);

module.exports = Workshop;
