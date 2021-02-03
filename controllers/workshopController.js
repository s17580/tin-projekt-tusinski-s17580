const { validationResult } = require("express-validator");
const WorkshopRepository = require("../repositories/sequelize/WorkshopRepository");
const AddressRepository = require("../repositories/sequelize/AddressRepository");

exports.showWorkshopList = (req, res, next) => {
  WorkshopRepository.getWorkshops().then((workshops) => {
    res.render("pages/workshops/workshop-list", { workshops, navLocation: "workshops" });
  });
};

exports.showAddForm = (req, res, next) => {
  AddressRepository.getAddresses().then((addresses) => {
    res.render("pages/workshops/workshop-add", { addresses, navLocation: "workshops" });
  });
};

exports.showEditForm = (req, res, next) => {
  const workshopId = req.params.id;

  WorkshopRepository.findById(workshopId).then((workshop) => {
    if (!workshop) return res.redirect("/workshops");

    AddressRepository.getAddresses().then((addresses) => {
      res.render("pages/workshops/workshop-edit", {
        workshop,
        addresses,
        navLocation: "workshops",
      });
    });
  });
};

exports.showWorkshopDetails = (req, res, next) => {
  const workshopId = req.params.id;

  WorkshopRepository.getWithDetails(workshopId).then((workshop) => {
    if (!workshop) return res.redirect("/workshops");

    res.render("pages/workshops/workshop-details", {
      workshop,
      navLocation: "workshops",
    });
  });
};

exports.createWorkshop = (req, res, next) => {
  const nazwa = req.body.nazwa;
  const telefon = req.body.telefon;
  const email = req.body.email;
  const AddressId = req.body.address_id;

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
    return res.redirect(`/workshops/add`);
  }

  WorkshopRepository.createWorkshop({ nazwa, telefon, email, AddressId })
    .then(() => {
      req.flash("success", "Pomyślnie utworzono warsztat");
      res.redirect("/workshops");
    })
    .catch((err) => {
      console.log(err);
      req.flash("error", "Dodanie warsztatu nie powiodło się");
      res.redirect(`/workshops/add`);
    });
};

exports.updateWorkshop = (req, res, next) => {
  const workshopId = req.params.id;
  const nazwa = req.body.nazwa;
  const telefon = req.body.telefon;
  const email = req.body.email;
  const AddressId = req.body.address_id;

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
    return res.redirect(`/workshops/${workshopId}/edit`);
  }

  WorkshopRepository.updateWorkshop(workshopId, { nazwa, telefon, email, AddressId })
    .then(() => {
      req.flash("success", "Pomyślnie zaaktualizowano warsztat");
      res.redirect("/workshops");
    })
    .catch((err) => {
      console.log(err);
      req.flash("error", "Aktualizacja nie powiodła się");
      res.redirect(`/workshops/${workshopId}/edit`);
    });
};

exports.deleteWorkshop = (req, res, next) => {
  const workshopId = req.params.id;

  WorkshopRepository.deleteWorkshop(workshopId)
    .then(() => {
      req.flash("success", "Pomyślnie usunięto warsztat oraz powiązane z nim rekordy");
      res.redirect("/workshops");
    })
    .catch((err) => {
      console.log(err);
      req.flash("error", "Usuwanie nie powiodło się");
      res.redirect("/workshops");
    });
};
