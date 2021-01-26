const Sequelize = require("sequelize");
const sequelize = require("../../config/sequelize/sequelize");

const User = sequelize.define(
  "User",
  {
    password: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(30),
      allowNull: false,
      unique: true,
    },
  },
  {
    underscored: true,
  }
);

module.exports = User;
