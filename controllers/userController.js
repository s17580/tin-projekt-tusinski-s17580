const UserRepository = require("../repositories/sequelize/UserRepository");

exports.showUserList = (req, res, next) => {
  UserRepository.getUsers().then((users) => {
    res.render("pages/user/user-list", { users, navLocation: "users" });
  });
};

exports.showUserEditForm = (req, res, next) => {
  const userId = req.params.id;

  UserRepository.findById(userId).then((user) => {
    if (!user) return res.redirect("/users");
    UserRepository.getUserRoles().then((roles) => {
      res.render("pages/user/user-edit", { user, roles, navLocation: "users" });
    });
  });
};
