const Workshop = require("../../model/sequelize/Workshop");
const Address = require("../../model/sequelize/Address");
const RepairOrder = require("../../model/sequelize/RepairOrder");

exports.getWorkshops = () => {
  return Workshop.findAll();
};

exports.findById = (id) => {
  return Workshop.findOne({
    where: { id },
  });
};

exports.getWithDetails = (id) => {
  return Workshop.scope("").findOne({
    where: { id },
    include: [Address, RepairOrder.scope("withCar")],
  });
};

exports.createWorkshop = (data) => {
  return Workshop.create({
    nazwa: data.nazwa,
    telefon: data.telefon,
    email: data.email,
    AddressId: data.AddressId,
  });
};

exports.updateWorkshop = (workshopId, data) => {
  return Workshop.update(data, { where: { id: workshopId } });
};

exports.deleteWorkshop = (workshopId) => {
  return Workshop.destroy({
    where: { id: workshopId },
  });
};
