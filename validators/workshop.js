const { body } = require("express-validator");

exports.validate = (method) => {
  switch (method) {
    case "create": {
      return [
        body("nazwa")
          .exists()
          .withMessage("Nazwa jest wymagana")
          .isLength({ min: 2, max: 30 })
          .withMessage("Nazwa powinna zawierać od 2 do 30 znaków"),
        body("telefon")
          .exists()
          .withMessage("Telefon jest wymagany")
          .custom((val) => /^\d{9}$/g.test(val))
          .withMessage("Telefon powinien się składać z 9 cyfr"),
        body("email")
          .exists()
          .withMessage("Email jest wymagany")
          .isEmail()
          .withMessage("Email jest niepoprawny"),
        body("address_id")
          .exists()
          .withMessage("Adres jest wymagany")
          .isInt({ gt: 0 })
          .withMessage("Adres jest niepoprawny"),
      ];
    }

    case "update": {
      return [
        body("nazwa")
          .exists()
          .withMessage("Nazwa jest wymagana")
          .isLength({ min: 2, max: 30 })
          .withMessage("Nazwa powinna zawierać od 2 do 30 znaków"),
        body("telefon")
          .exists()
          .withMessage("Telefon jest wymagany")
          .custom((val) => /^\d{9}$/g.test(val))
          .withMessage("Telefon powinien się składać z 9 cyfr"),
        body("email")
          .exists()
          .withMessage("Email jest wymagany")
          .isEmail()
          .withMessage("Email jest niepoprawny"),
        body("address_id")
          .exists()
          .withMessage("Adres jest wymagany")
          .isInt({ gt: 0 })
          .withMessage("Adres jest niepoprawny"),
      ];
    }
  }
};
