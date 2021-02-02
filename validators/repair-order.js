const { body } = require("express-validator");

exports.validate = (method) => {
  switch (method) {
    case "create": {
      return [
        body("car_id")
          .exists()
          .withMessage("Samochód jest wymagany")
          .isInt({ gt: 0 })
          .withMessage("Samochód jest niepoprawny"),
        body("workshop_id")
          .exists()
          .withMessage("Warsztat jest wymagany")
          .isInt({ gt: 0 })
          .withMessage("Warsztat jest niepoprawny"),
        body("repair_type_id")
          .exists()
          .withMessage("Typ naprawy jest wymagany")
          .isInt({ gt: 0 })
          .withMessage("Typ naprawy jest niepoprawny"),
      ];
    }

    case "update": {
      return [
        body("car_id")
          .exists()
          .withMessage("Samochód jest wymagany")
          .isInt({ gt: 0 })
          .withMessage("Samochód jest niepoprawny"),
        body("workshop_id")
          .exists()
          .withMessage("Warsztat jest wymagany")
          .isInt({ gt: 0 })
          .withMessage("Warsztat jest niepoprawny"),
        body("repair_type_id")
          .exists()
          .withMessage("Typ naprawy jest wymagany")
          .isInt({ gt: 0 })
          .withMessage("Typ naprawy jest niepoprawny"),
        body("status").exists().withMessage("Status jest wymagany"),
      ];
    }
  }
};
