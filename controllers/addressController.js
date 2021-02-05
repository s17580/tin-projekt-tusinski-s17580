const { validationResult } = require("express-validator");
const AddressRepository = require("../repositories/sequelize/AddressRepository");

exports.showAddressList = (req, res, next) => {
  AddressRepository.getAddresses().then((addresses) => {
    res.render("pages/addresses/address-list", { addresses, navLocation: "addresses" });
  });
};

exports.showAddForm = (req, res, next) => {
  AddressRepository.getAddresses().then((addresses) => {
    res.render("pages/addresses/address-add", { addresses, navLocation: "addresses" });
  });
};

exports.showEditForm = (req, res, next) => {
  const addressId = req.params.id;

  AddressRepository.findById(addressId).then((address) => {
    if (!address) return res.redirect("/addresses");

    res.render("pages/addresses/address-edit", {
      address,
      navLocation: "addresses",
    });
  });
};

exports.createAddress = (req, res, next) => {
  const ulica = req.body.ulica;
  const numer_lokalu = req.body.numer_lokalu;
  const kod_pocztowy = req.body.kod_pocztowy;
  const miasto = req.body.miasto;

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
    return res.redirect(`/addresses/add`);
  }

  AddressRepository.createAddress({ ulica, numer_lokalu, kod_pocztowy, miasto })
    .then(() => {
      req.flash("success", "Pomyślnie utworzono adres");
      res.redirect("/addresses");
    })
    .catch((err) => {
      console.log(err);
      req.flash("error", "Dodanie adresu nie powiodło się");
      res.redirect(`/addresses/add`);
    });
};

exports.updateAddress = (req, res, next) => {
  const addressId = req.params.id;
  const ulica = req.body.ulica;
  const numer_lokalu = req.body.numer_lokalu;
  const kod_pocztowy = req.body.kod_pocztowy;
  const miasto = req.body.miasto;

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
    return res.redirect(`/addresses/${addressId}/edit`);
  }

  AddressRepository.updateAddress(addressId, { ulica, numer_lokalu, kod_pocztowy, miasto })
    .then(() => {
      req.flash("success", "Pomyślnie zaktualizowano adres");
      res.redirect("/addresses");
    })
    .catch((err) => {
      console.log(err);
      req.flash("error", "Aktualizacja nie powiodła się");
      res.redirect(`/addresses/${addressId}/edit`);
    });
};

exports.deleteAddress = (req, res, next) => {
  const addressId = req.params.id;

  AddressRepository.deleteAddress(addressId)
    .then(() => {
      req.flash("success", "Pomyślnie usunięto adres oraz powiązane z nim rekordy");
      res.redirect("/addresses");
    })
    .catch((err) => {
      console.log(err);
      req.flash("error", "Usuwanie nie powiodło się");
      res.redirect("/addresses");
    });
};
