var express = require("express");
var router = express.Router();
var userController = require("../controller/userController");
var { body, validationResult } = require("express-validator");
router
  .post(
    "/register",
    body("username")
      .notEmpty()
      .withMessage("Username is required")
      .isLength({ min: 3 })
      .withMessage("Username is 3 characters minimum"),
    (req, res, next) => {
      const errors = validationResult(req);
      if (errors) {
        console.error(errors);
      }
    },
    userController.register
  )
  .get("/list", userController.list);

module.exports = router;
