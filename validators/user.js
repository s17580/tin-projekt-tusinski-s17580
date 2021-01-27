const { body } = require("express-validator");

exports.validate = (method) => {
  switch (method) {
    case "login": {
      return [
        body("email")
          .exists()
          .withMessage("Email jest wymagany")
          .isEmail()
          .withMessage("Email jest niepoprawny"),
        body("password")
          .exists()
          .withMessage("Hasło jest wymagane")
          .isLength({ min: 6, max: 12 })
          .withMessage("Hasło musi mieć min 6 znaków, max 12 znaków"),
      ];
    }

    case "register": {
      return [
        body("email")
          .exists()
          .withMessage("Email jest wymagany")
          .isEmail()
          .withMessage("Email jest niepoprawny"),
        body("password")
          .exists()
          .withMessage("Hasło jest wymagane")
          .isLength({ min: 6, max: 12 })
          .withMessage("Hasło musi mieć min 6 znaków, max 12 znaków"),
        body("password2").custom((value, { req }) => {
          if (value !== req.body.password) {
            throw new Error("Hasła muszą być takie same");
          } else {
            return true;
          }
        }),
      ];
    }
  }
};
