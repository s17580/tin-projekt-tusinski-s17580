const { body } = require("express-validator");

exports.validate = (method) => {
  switch (method) {
    case "create": {
      return [
        body("ulica")
          .exists()
          .withMessage("Ulica jest wymagana")
          .isLength({ min: 2, max: 35 })
          .withMessage("Ulica powinna zawierać od 2 do 35 znaków"),
        body("numer_lokalu")
          .exists()
          .withMessage("Numer lokalu jest wymagany")
          .isLength({ min: 1, max: 6 })
          .withMessage("Ulica powinna zawierać od 1 do 6 znaków"),
        body("kod_pocztowy")
          .exists()
          .withMessage("Kod pocztowy jest wymagany")
          .custom((val) => /^\d{2}-\d{3}$/g.test(val))
          .withMessage("Kod pocztowy jest niepoprawny"),
        body("miasto")
          .exists()
          .withMessage("Miasto jest wymagane")
          .isLength({ min: 2, max: 35 })
          .withMessage("Miasto powinno zawierać od 2 do 35 znaków"),
      ];
    }

    case "update": {
      return [
        body("ulica")
          .exists()
          .withMessage("Ulica jest wymagana")
          .isLength({ min: 2, max: 35 })
          .withMessage("Ulica powinna zawierać od 2 do 35 znaków"),
        body("numer_lokalu")
          .exists()
          .withMessage("Numer lokalu jest wymagany")
          .isLength({ min: 1, max: 6 })
          .withMessage("Ulica powinna zawierać od 1 do 6 znaków"),
        body("kod_pocztowy")
          .exists()
          .withMessage("Kod pocztowy jest wymagany")
          .custom((val) => /^\d{2}-\d{3}$/g.test(val))
          .withMessage("Kod pocztowy jest niepoprawny"),
        body("miasto")
          .exists()
          .withMessage("Miasto jest wymagane")
          .isLength({ min: 2, max: 35 })
          .withMessage("Miasto powinno zawierać od 2 do 35 znaków"),
      ];
    }
  }
};
