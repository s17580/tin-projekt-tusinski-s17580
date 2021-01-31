const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const v = require("../validators/user");

router.get("/", userController.showUserList);
router.get("/:id/edit", userController.showUserEditForm);
router.post("/:id", v.validate("update"), userController.updateUser);
router.post("/:id/delete", userController.deleteUser);

module.exports = router;
