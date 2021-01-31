const { validationResult } = require("express-validator");
const CarRepository = require("../repositories/sequelize/CarRepository");
const RepairOrderRepository = require("../repositories/sequelize/RepairOrderRepository");

exports.showCarsList = (req, res, next) => {
  CarRepository.getCars().then((cars) => {
    res.render("pages/cars/cars-list", { cars, navLocation: "cars" });
  });
};

exports.showAddForm = (req, res, next) => {
  res.render("pages/cars/car-add-form", { car: false, navLocation: "cars" });
};

exports.showEditForm = (req, res, next) => {
  const carId = req.params.id;

  CarRepository.findById(carId).then((car) => {
    if (!car) return res.redirect("/cars");
    res.render("pages/cars/car-edit-form", { car, navLocation: "cars" });
  });
};

exports.showCarDetails = (req, res, next) => {
  const carId = req.params.id;

  CarRepository.findById(carId).then((car) => {
    if (!car) return res.redirect("/cars");

    RepairOrderRepository.getByCarId(car.id).then((orders) => {
      res.render("pages/cars/car-details", { car, repairOrders: orders, navLocation: "cars" });
    });
  });
};

exports.createCar = (req, res, next) => {
  const marka = req.body.marka;
  const typ = req.body.typ;
  const numer_rejestracyjny = req.body.numer_rejestracyjny;
  const rok_produkcji = req.body.rok_produkcji;
  const pojemnosc = req.body.pojemnosc;

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
    return res.redirect(`/cars/add`);
  }

  CarRepository.createCar({ marka, typ, numer_rejestracyjny, rok_produkcji, pojemnosc })
    .then(() => {
      req.flash("success", "Pomyślnie utworzono samochód");
      res.redirect("/cars");
    })
    .catch((err) => {
      console.log(err);
      req.flash("error", "Dodanie samochodu nie powiodło się");
      res.redirect(`/cars/add`);
    });
};

exports.updateCar = (req, res, next) => {
  const carId = req.params.id;
  const marka = req.body.marka;
  const typ = req.body.typ;
  const numer_rejestracyjny = req.body.numer_rejestracyjny;
  const rok_produkcji = req.body.rok_produkcji;
  const pojemnosc = req.body.pojemnosc;

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
    return res.redirect(`/cars/${carId}/edit`);
  }

  CarRepository.updateCar(carId, { marka, typ, numer_rejestracyjny, rok_produkcji, pojemnosc })
    .then(() => {
      req.flash("success", "Pomyślnie zaaktualizowano samochód");
      res.redirect("/cars");
    })
    .catch((err) => {
      console.log(err);
      req.flash("error", "Aktualizacja nie powiodła się");
      res.redirect(`/cars/${carId}/edit`);
    });
};

exports.deleteCar = (req, res, next) => {
  const carId = req.params.id;

  CarRepository.deleteCar(carId)
    .then(() => {
      req.flash("success", "Pomyślnie usunięto samochód");
      res.redirect("/cars");
    })
    .catch((err) => {
      console.log(err);
      req.flash("error", "Usuwanie nie powiodło się");
      res.redirect("/cars");
    });
};
