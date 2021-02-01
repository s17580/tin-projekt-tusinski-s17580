const express = require("express");
const router = express.Router();
const workshopController = require("../controllers/workshopController");
const v = require("../validators/workshop");

router.get("/", workshopController.showWorkshopList);
router.post("/", v.validate("create"), workshopController.createWorkshop);
router.get("/add", workshopController.showAddForm);
router.post("/:id/edit", v.validate("update"), workshopController.updateWorkshop);
router.get("/:id/edit", workshopController.showEditForm);
router.get("/:id/details", workshopController.showWorkshopDetails);
router.post("/:id/delete", workshopController.deleteWorkshop);

module.exports = router;
