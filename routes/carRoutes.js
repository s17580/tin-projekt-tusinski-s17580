const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController");
const v = require("../validators/car");

router.get("/", carController.showCarsList);
router.post("/", v.validate("create"), carController.createCar);
router.get("/add", carController.showAddForm);
router.post("/:id/edit", v.validate("update"), carController.updateCar);
router.get("/:id/edit", carController.showEditForm);
router.get("/:id/details", carController.showCarDetails);
router.post("/:id/delete", carController.deleteCar);

module.exports = router;
