const express = require("express");
const router = express.Router();
const addressController = require("../controllers/addressController");
const v = require("../validators/address");

router.get("/", addressController.showAddressList);
router.post("/", v.validate("create"), addressController.createAddress);
router.get("/add", addressController.showAddForm);
router.post("/:id/edit", v.validate("update"), addressController.updateAddress);
router.get("/:id/edit", addressController.showEditForm);
router.post("/:id/delete", addressController.deleteAddress);

module.exports = router;
