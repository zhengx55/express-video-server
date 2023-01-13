var express = require("express");
var router = express.Router();
var videoController = require("../controller/videoController");

router
  .get("/list", videoController.list)
  .delete("/delete", videoController.delete);
module.exports = router;
