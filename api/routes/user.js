var express = require("express");
var router = express.Router();
const { User, Tag, Event } = require("../model");
// all endpoints related to the user

router.get("/getUser/:id", (req, res) => {
  console.log(req.params);
  User.findOne({ id: req.params.id }, (err, user) => {
    res.send({
      id: user.id,
      name: user.name,
      email: user.email,
      gender: user.gender,
    });
  });
});
module.exports = router;
