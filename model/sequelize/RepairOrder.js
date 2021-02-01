const Sequelize = require("sequelize");
const sequelize = require("../../config/sequelize/sequelize");
const Workshop = require("./Workshop");
const RepairType = require("./RepairType");
const Car = require("./Car");

const RepairOrder = sequelize.define(
  "RepairOrder",
  {
    data_od: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    data_do: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    koszt_naprawy: {
      type: Sequelize.DECIMAL(7, 2),
      allowNull: false,
    },
  },
  {
    underscored: true,
    defaultScope: {
      include: [Workshop, RepairType],
    },
    scopes: {
      withCar: { include: [Car, RepairType] },
    },
  }
);

module.exports = RepairOrder;
