const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController");

router.get("/", carController.showSamochodList);
router.get("/add", carController.showAddSamochodForm);
//router.get('/details/:samochodId', carController.showSamochodDetails);

module.exports = router;
