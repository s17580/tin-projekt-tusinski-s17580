const RepairType = require("../../model/sequelize/RepairType");

exports.getRepairTypes = () => {
  return RepairType.findAll();
};

exports.findById = (id) => {
  return RepairType.findOne({
    where: { id },
  });
};

exports.createRepairType = (data) => {
  const nazwa = data.nazwa;
  const cena = data.cena;

  return RepairType.create({ nazwa, cena });
};

exports.updateRepairType = (repairTypeId, data) => {
  return RepairType.update(data, { where: { id: repairTypeId } });
};

exports.deleteRepairType = (repairTypeId) => {
  return RepairType.destroy({
    where: { id: repairTypeId },
  });
};
