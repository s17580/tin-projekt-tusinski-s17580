const { validationResult } = require("express-validator");
const UserRepository = require("../repositories/sequelize/UserRepository");
const authUtils = require("../utils/authUtils");

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

exports.updateUser = (req, res, next) => {
  const userId = req.params.id;
  const password = req.body.password;
  const email = req.body.email;
  const RoleId = req.body.role;

  let userData = { email, RoleId };

  if (password !== "") {
    userData.password = authUtils.hashPassword(password);
  }

  // walidacja parametrów
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    req.flash(
      "error",
      errors
        .array()
        .map((el) => el.msg)
        .join("<br>")
    );
    return res.redirect(`/users/${userId}/edit`);
  }

  UserRepository.updateUser(userId, userData)
    .then(() => {
      req.flash("success", "Pomyślnie zaaktualizowano użytkownika");
      res.redirect("/users");
    })
    .catch((err) => {
      console.log(err);
      req.flash("error", "Aktualizacja nie powiodła się");
      res.redirect(`/users/${userId}/edit`);
    });
};

exports.deleteUser = (req, res, next) => {
  const userId = req.params.id;

  UserRepository.deleteUser(userId)
    .then(() => {
      req.flash("success", "Pomyślnie usunięto użytkownika");
      res.redirect("/users");
    })
    .catch((err) => {
      console.log(err);
      req.flash("error", "Usuwanie nie powiodło się");
      res.redirect("/users");
    });
};
