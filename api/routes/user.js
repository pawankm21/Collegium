var express = require("express");
var router = express.Router();

// all endpoints related to the user 

router.get("/", function (req, res, next) {
  res.send("this is a user");
});

module.exports = router;
