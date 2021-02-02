const Sequelize = require("sequelize");
const sequelize = require("../../config/sequelize/sequelize");

const RepairType = sequelize.define(
  "RepairType",
  {
    nazwa: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    cena: {
      type: Sequelize.DECIMAL(7, 2),
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

module.exports = RepairType;
