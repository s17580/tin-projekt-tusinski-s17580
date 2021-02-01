const express = require("express");
const router = express.Router();
const addressController = require("../controllers/addressController");

router.get("/", addressController.showAdresList);
router.get("/add", addressController.showAddAdresForm);
//router.get('/details/:samochodId', samochodControler.showSamochodDetails);

module.exports = router;
