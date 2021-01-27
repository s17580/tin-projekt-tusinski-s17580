const User = require("../../model/sequelize/User");

exports.getUsers = () => {
  return User.findAll();
};

exports.findByEmail = (email) => {
  return User.findOne({
    where: { email: email },
  });
};

exports.createUser = (data) => {
  return User.create({
    email: data.email,
    password: data.password,
    RoleId: 2,
  });
};

exports.updateUser = (userId, data) => {
  return User.update(data, { where: { _id: userId } });
};

exports.deleteUser = (userId) => {
  return User.destroy({
    where: { _id: userId },
  });
};
