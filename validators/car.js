const { body } = require("express-validator");

exports.validate = (method) => {
  switch (method) {
    case "create": {
      return [
        body("marka")
          .exists()
          .withMessage("Marka jest wymagana")
          .isLength({ min: 2, max: 15 })
          .withMessage("Marka powinna zawierać od 2 do 15 znaków"),
        body("typ")
          .exists()
          .withMessage("Typ jest wymagany")
          .isLength({ min: 2, max: 15 })
          .withMessage("Typ powinien zawierać od 2 do 15 znaków"),
        body("numer_rejestracyjny")
          .exists()
          .withMessage("Numer rejestracyjny jest wymagany")
          .isLength({ min: 2, max: 15 })
          .withMessage("Numer rejestracyjny powinien zawierać od 2 do 15 znaków"),
        body("rok_produkcji")
          .exists()
          .withMessage("Rok produkcji jest wymagany")
          .isInt({ gt: 1899, ls: 2081 })
          .withMessage("Rok produkcji musi być liczbą 4 cyfrową z przedziału 1900-2080"),
        body("pojemnosc")
          .exists()
          .withMessage("Pojemnosc jest wymagana")
          .isInt({ gt: 49, ls: 7001 })
          .withMessage("Pojemność musi być liczą z przedziału 50-7000"),
      ];
    }

    case "update": {
      return [
        body("marka")
          .exists()
          .withMessage("Marka jest wymagana")
          .isLength({ min: 2, max: 15 })
          .withMessage("Marka powinna zawierać od 2 do 15 znaków"),
        body("typ")
          .exists()
          .withMessage("Typ jest wymagany")
          .isLength({ min: 2, max: 15 })
          .withMessage("Typ powinien zawierać od 2 do 15 znaków"),
        body("numer_rejestracyjny")
          .exists()
          .withMessage("Numer rejestracyjny jest wymagany")
          .isLength({ min: 2, max: 15 })
          .withMessage("Numer rejestracyjny powinien zawierać od 2 do 15 znaków"),
        body("rok_produkcji")
          .exists()
          .withMessage("Rok produkcji jest wymagany")
          .isInt({ gt: 1899, ls: 2081 })
          .withMessage("Rok produkcji musi być liczbą 4 cyfrową z przedziału 1900-2080"),
        body("pojemnosc")
          .exists()
          .withMessage("Pojemnosc jest wymagana")
          .isInt({ gt: 49, ls: 7001 })
          .withMessage("Pojemność musi być liczą z przedziału 50-7000"),
      ];
    }
  }
};
