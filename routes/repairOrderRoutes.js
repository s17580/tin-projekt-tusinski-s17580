const express = require("express");
const router = express.Router();
const repairOrderController = require("../controllers/repairOrderController");
const v = require("../validators/repair-order");

router.get("/", repairOrderController.showRepairOrderList);
router.post("/", v.validate("create"), repairOrderController.createRepairOrder);
router.get("/add", repairOrderController.showAddForm);
router.post("/:id/edit", v.validate("update"), repairOrderController.updateRepairOrder);
router.get("/:id/edit", repairOrderController.showEditForm);
router.get("/:id/details", repairOrderController.showRepairOrderDetails);
router.post("/:id/delete", repairOrderController.deleteRepairOrder);

module.exports = router;
