const Sequelize = require("sequelize");
const sequelize = require("../../config/sequelize/sequelize");

const RepairType = sequelize.define(
  "RepairType",
  {
    rodzaj: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);
module.exports = RepairType;
