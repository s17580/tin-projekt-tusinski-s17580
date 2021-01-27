const { validationResult } = require("express-validator");
const UserRepository = require("../repositories/sequelize/UserRepository");
const authUtils = require("../utils/authUtils");

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

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
    return res.redirect("/logowanie");
  }

  UserRepository.findByEmail(email)
    .then((user) => {
      if (!user) {
        req.flash("error", "Nieprawidłowy adres email lub hasło");
        res.redirect("/logowanie");
      } else if (authUtils.comparePasswords(password, user.password) === true) {
        req.session.loggedUser = user;
        res.redirect("/");
      } else {
        req.flash("error", "Nieprawidłowy adres email lub hasło");
        res.redirect("/logowanie");
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

exports.register = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const password2 = req.body.password2;

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
    return res.redirect("/rejestracja");
  }

  UserRepository.findByEmail(email)
    .then((user) => {
      if (user) {
        req.flash("error", "Użytkownik o tym adresie email już istnieje.");
        res.redirect("/rejestracja");
      } else {
        UserRepository.createUser({
          email,
          password: authUtils.hashPassword(password),
        })
          .then(() => {
            req.flash("success", "Rejestracja pomyślna, możesz się zalogować.");
            res.redirect("/logowanie");
          })
          .catch((err) => {
            console.log(err);
            req.flash("error", "Wystąpił błąd");
            res.redirect("/rejestracja");
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
