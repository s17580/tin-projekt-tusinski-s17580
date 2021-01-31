const Car = require("../../model/sequelize/Car");

exports.getCars = () => {
  return Car.findAll();
};

exports.findById = (id) => {
  return Car.findOne({
    where: { id },
  });
};

exports.createCar = (data) => {
  return Car.create({
    marka: data.marka,
    typ: data.typ,
    numer_rejestracyjny: data.numer_rejestracyjny,
    rok_produkcji: data.rok_produkcji,
    pojemnosc: data.pojemnosc,
    UserId: data.UserId,
  });
};

exports.updateCar = (carId, data) => {
  return Car.update(data, { where: { id: carId } });
};

exports.deleteCar = (carId) => {
  return Car.destroy({
    where: { id: carId },
  });
};
