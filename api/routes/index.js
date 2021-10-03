var express = require("express");
var router = express.Router();

//health check

router.get("/", function (req, res, next) {
  res.send("this is index");
});

module.exports = router;
