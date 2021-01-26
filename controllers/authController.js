const UserRepository = require("../repositories/sequelize/UserRepository");

/// TO DO USE AUTHUTILS
exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  UserRepository.findByEmail(email)
    .then((user) => {
      if (!user) {
        res.render("index", {
          navLocation: "logowanie",
          loginError: "Nieprawidłowy adres email lub hasło",
        });
      } else if (user.password === password) {
        req.session.loggedUser = user;
        res.redirect("/");
      } else {
        res.render("index", {
          navLocation: "logowanie",
          loginError: "Nieprawidłowy adres email lub hasło",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.logout = (req, res, next) => {
  req.session.loggedUser = undefined;
  res.redirect("/");
};
