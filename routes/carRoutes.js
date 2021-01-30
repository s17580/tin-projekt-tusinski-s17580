const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController");

router.get("/", carController.showCarsList);
router.get("/add", carController.showCarForm);
router.get("/:id/details", carController.showCarDetails);

module.exports = router;
