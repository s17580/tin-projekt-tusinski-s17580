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
    defaultScope: {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    },
  }
);
module.exports = Role;
