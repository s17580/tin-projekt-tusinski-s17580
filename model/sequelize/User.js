const Sequelize = require("sequelize");
const sequelize = require("../../config/sequelize/sequelize");
const Role = require("./Role");

const User = sequelize.define(
  "User",
  {
    password: {
      type: Sequelize.STRING(150),
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
    defaultScope: {
      attributes: { exclude: "password" },
      include: [Role],
    },
    scopes: {
      withPassword: { attributes: {}, include: [Role] },
    },
  }
);

module.exports = User;
