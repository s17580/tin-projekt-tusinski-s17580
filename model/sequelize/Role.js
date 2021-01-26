const Sequelize = require("sequelize");
const sequelize = require("../../config/sequelize/sequelize");

const Role = sequelize.define(
  "Role",
  {
    name: {
      type: Sequelize.STRING(15),
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);
module.exports = Role;
