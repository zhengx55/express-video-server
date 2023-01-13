var express = require("express");
var router = express.Router();
var userController = require("../controller/userController");

router
  .post("/register", userController.register)
  .get("/list", userController.list);

module.exports = router;
