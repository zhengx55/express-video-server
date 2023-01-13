var express = require("express");
var router = express.Router();
router.use("/video", require("./video"));
router.use("/users", require("./users"));

module.exports = router;
