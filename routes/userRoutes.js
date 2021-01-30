const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.showUserList);
router.get("/:id/edit", userController.showUserEditForm);

module.exports = router;
