const RepairOrder = require("../../model/sequelize/RepairOrder");

exports.getRepairOrders = () => {
  return RepairOrder.findAll();
};

exports.findById = (id) => {
  return RepairOrder.findOne({
    where: { id },
  });
};

exports.getByCarId = (carId) => {
  return RepairOrder.findAll({
    where: { CarId: carId },
  });
};

exports.createRepairOrder = (data) => {
  const CarId = data.CarId;
  const WorkshopId = data.WorkshopId;
  const RepairTypeId = data.RepairTypeId;
  const opis = data.opis;

  return RepairOrder.create({ CarId, WorkshopId, RepairTypeId, opis });
};

exports.updateRepairOrder = (repairOrderId, data) => {
  return RepairOrder.update(data, { where: { id: repairOrderId } });
};

exports.deleteRepairOrder = (repairOrderId) => {
  return RepairOrder.destroy({
    where: { id: repairOrderId },
  });
};
