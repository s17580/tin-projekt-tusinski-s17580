const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController");
const v = require("../validators/user");

router.get("/", function (req, res, next) {
  res.render("index", { navLocation: "main" });
});

router.get("/login", function (req, res, next) {
  res.render("pages/login", { navLocation: "login" });
});

router.get("/register", function (req, res, next) {
  res.render("pages/register", { navLocation: "register" });
});

router.post("/register", v.validate("register"), AuthController.register);
router.post("/login", v.validate("login"), AuthController.login);
router.get("/logout", AuthController.logout);

module.exports = router;
