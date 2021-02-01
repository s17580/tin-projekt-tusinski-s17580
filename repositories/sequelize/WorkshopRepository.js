const Workshop = require("../../model/sequelize/Workshop");

exports.getWorkshops = () => {
  return Workshop.findAll();
};

exports.findById = (id) => {
  return Workshop.findOne({
    where: { id },
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
