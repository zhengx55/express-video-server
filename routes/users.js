var express = require("express");
var router = express.Router();
var userController = require("../controller/userController");
var validator = require("../middleware/validator/userValidator");

router
  .post("/register", validator.register, userController.register)
  .post("/login", validator.login, userController.login)
  .get("/list", userController.list);

module.exports = router;
