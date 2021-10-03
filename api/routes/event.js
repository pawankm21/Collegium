var express = require("express");
var router = express.Router();

// contains all event related endpoints

router.get("/", function (req, res, next) {
  res.send("this is an event");
});

module.exports = router;
