const Address = require("../../model/sequelize/Address");

exports.getAddresses = () => {
  return Address.findAll();
};

exports.findById = (id) => {
  return Address.findOne({
    where: { id },
  });
};

exports.createAddress = (data) => {
  return Address.create({
    ulica: data.ulica,
    numer_lokalu: data.numer_lokalu,
    kod_pocztowy: data.kod_pocztowy,
    miasto: data.miasto,
  });
};

exports.updateAddress = (addressId, data) => {
  return Address.update(data, { where: { id: addressId } });
};

exports.deleteAddress = (addressId) => {
  return Address.destroy({
    where: { id: addressId },
  });
};
