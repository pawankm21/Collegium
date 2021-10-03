var express = require("express");
var router = express.Router();

// get all metrics 

router.get("/", function (req, res, next) {
  res.send("give metrics");
});

module.exports = router;
