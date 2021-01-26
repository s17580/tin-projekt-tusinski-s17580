const express = require("express");
const router = express.Router();
const repairOrderController = require("../controllers/repairOrderController");

router.get("/", repairOrderController.showZlecenieNaprawyList);
router.get("/add", repairOrderController.showAddZlecenieNaprawyForm);
//router.get('/details/:samochodId', samochodControler.showSamochodDetails);

module.exports = router;
