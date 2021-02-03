const { validationResult } = require("express-validator");
const RepairOrderRepository = require("../repositories/sequelize/RepairOrderRepository");
const CarRepository = require("../repositories/sequelize/CarRepository");
const WorkshopRepository = require("../repositories/sequelize/WorkshopRepository");
const RepairTypeRepository = require("../repositories/sequelize/RepairTypeRepository");

exports.showRepairOrderList = (req, res, next) => {
  RepairOrderRepository.getRepairOrders().then((repairOrders) => {
    res.render("pages/repair-orders/repair-order-list", {
      repairOrders,
      navLocation: "repair-orders",
    });
  });
};

exports.showAddForm = (req, res, next) => {
  CarRepository.getCars().then((cars) => {
    WorkshopRepository.getWorkshops().then((workshops) => {
      RepairTypeRepository.getRepairTypes().then((repairTypes) => {
        res.render("pages/repair-orders/repair-order-add", {
          cars,
          workshops,
          repairTypes,
          navLocation: "repair-orders",
        });
      });
    });
  });
};

exports.showEditForm = (req, res, next) => {
  const repairOrderId = req.params.id;

  RepairOrderRepository.findById(repairOrderId).then((order) => {
    if (!order) return res.redirect("/repair-orders");

    CarRepository.getCars().then((cars) => {
      WorkshopRepository.getWorkshops().then((workshops) => {
        RepairTypeRepository.getRepairTypes().then((repairTypes) => {
          res.render("pages/repair-orders/repair-order-edit", {
            order,
            cars,
            workshops,
            repairTypes,
            navLocation: "repair-orders",
          });
        });
      });
    });
  });
};

exports.showRepairOrderDetails = (req, res, next) => {
  const repairOrderId = req.params.id;

  RepairOrderRepository.findById(repairOrderId).then((order) => {
    if (!order) return res.redirect("/repair-orders");

    res.render("pages/repair-orders/repair-order-details", {
      order,
      navLocation: "repair-orders",
    });
  });
};

exports.createRepairOrder = (req, res, next) => {
  const CarId = req.body.car_id;
  const WorkshopId = req.body.workshop_id;
  const RepairTypeId = req.body.repair_type_id;
  const opis = req.body.opis;

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
    return res.redirect(`/repair-orders/add`);
  }

  RepairOrderRepository.createRepairOrder({
    CarId,
    WorkshopId,
    RepairTypeId,
    opis,
  })
    .then(() => {
      req.flash("success", "Pomyślnie utworzono zlecenie naprawy");
      res.redirect("/repair-orders");
    })
    .catch((err) => {
      console.log(err);
      req.flash("error", "Dodanie zlecenia naprawy nie powiodło się");
      res.redirect(`/repair-orders/add`);
    });
};

exports.updateRepairOrder = (req, res, next) => {
  const repairOrderId = req.params.id;
  const CarId = req.body.car_id;
  const WorkshopId = req.body.workshop_id;
  const RepairTypeId = req.body.repair_type_id;
  const status = req.body.status;
  const opis = req.body.opis;

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
    return res.redirect(`/repair-orders/${repairOrderId}/edit`);
  }

  RepairOrderRepository.updateRepairOrder(repairOrderId, {
    CarId,
    WorkshopId,
    RepairTypeId,
    opis,
    status,
  })
    .then(() => {
      req.flash("success", "Pomyślnie zaaktualizowano zlecenie naprawy");
      res.redirect("/repair-orders");
    })
    .catch((err) => {
      console.log(err);
      req.flash("error", "Aktualizacja nie powiodła się");
      res.redirect(`/repair-orders/${repairOrderId}/edit`);
    });
};

exports.deleteRepairOrder = (req, res, next) => {
  const repairOrder = req.params.id;

  RepairOrderRepository.deleteRepairOrder(repairOrder)
    .then(() => {
      req.flash("success", "Pomyślnie usunięto zlecenie naprawy oraz powiązane z nim rekordy");
      res.redirect("/repair-orders");
    })
    .catch((err) => {
      console.log(err);
      req.flash("error", "Usuwanie nie powiodło się");
      res.redirect("/repair-orders");
    });
};
