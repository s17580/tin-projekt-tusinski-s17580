const express = require("express");
const router = express.Router();
const workshopController = require("../controllers/workshopController");

router.get("/", workshopController.showWorkshopList);
router.get("/add", workshopController.showAddWorkshopForm);
//router.get('/details/:samochodId', samochodControler.showSamochodDetails);

module.exports = router;
