var express = require("express");
var router = express.Router();
const { User, Tag, Event } = require("../model");
// all endpoints related to the user

router.get("/getUser/:id", (req, res) => {
  console.log(req.params);
  User.findById(req.params.id, (err, user) => {
    try {
      res.send({
        id: user._id,
        name: user.name,
        email: user.email,
        gender: user.gender,
      });
    } catch {
      res.send(err);
    }
  });
});
router.post("/createUser", (req, res) => {
  const { name, email, gender, college } = req.body;
  const newUser = new User({
    name: name,
    email: email,
    gender: gender,
    college: college,
  });
  newUser.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send({
        statusCode: 200,
        id: 1,
        message: "User added succesfully!",
      });
    }
  });
});
module.exports = router;
