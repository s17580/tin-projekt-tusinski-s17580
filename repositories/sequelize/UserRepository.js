const User = require("../../model/sequelize/User");
const Role = require("../../model/sequelize/Role");

exports.getUserRoles = () => {
  return Role.findAll();
};

exports.getUsers = () => {
  return User.findAll();
};

exports.findById = (id) => {
  return User.findOne({
    where: { id },
  });
};

exports.findByEmail = (email) => {
  return User.scope("withPassword").findOne({
    where: { email },
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
