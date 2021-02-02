const Sequelize = require("sequelize");
const sequelize = require("../../config/sequelize/sequelize");
const Workshop = require("./Workshop");
const RepairType = require("./RepairType");
const Car = require("./Car");

const RepairOrder = sequelize.define(
  "RepairOrder",
  {
    status: {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: "OCZEKUJACE",
    },
    opis: {
      type: Sequelize.STRING(300),
      allowNull: true,
    },
  },
  {
    underscored: true,
    defaultScope: {
      include: [Car, Workshop, RepairType],
    },
    scopes: {
      withCar: { include: [Car, RepairType] },
    },
  }
);

module.exports = RepairOrder;
