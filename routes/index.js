const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController");
const v = require("../validators/user");

router.get("/", function (req, res, next) {
  res.render("index", { navLocation: "main" });
});

router.get("/logowanie", function (req, res, next) {
  res.render("pages/logowanie", { navLocation: "logowanie" });
});

router.get("/rejestracja", function (req, res, next) {
  res.render("pages/rejestracja", { navLocation: "rejestracja" });
});

router.post("/register", v.validate("register"), AuthController.register);
router.post("/login", v.validate("login"), AuthController.login);
router.get("/logout", AuthController.logout);

module.exports = router;
