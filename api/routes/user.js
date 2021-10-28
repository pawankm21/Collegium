var express = require("express");
var router = express.Router();
const { User } = require("../model");

// all endpoints related to the user
router.post("/login", async (req, res) => {
  console.log(req.body);
  res.send({ message: 'got it' });
})
router.get("/getUser/:id", (req, res) => {
  console.log(req.params);
  User.findById(req.params.id, (err, user) => {
    try {
      res.send({
        id: user._id,
        name: user.name,
        email: user.email,
        gender: user.gender,
        roll: user.roll,
        college: user.college,
        branch: user.branch,
        dob: user.dob,
      });
    } catch (err) {
      res.send({
        status: "error",
        error: err,
      });
    }
  });
});

router.post("/createUser", async (req, res) => {
  const userData = req.body;
  console.log(userData);
  const newUser = new User(userData);
  await newUser.save((err) => {
    console.log(err);
    if (err) {
      res.send({
        status: "error",
        error: err,
        message:'Email already exists!!'
      });
    } else {
      res.send({
        status:'success',
        id: newUser._id,
        message: "New User Created Successfully!",
      });
    }
  });
});

router.post("/updateUser/:id", (req, res) => {
  const { branch, roll, email } = req.body;
  console.log(branch, roll, email);
  User.updateOne(
    { _id: req.params.id },
    {
      email: email,
      branch: branch,
      roll: roll,
    },
    (err) => {
      if (err) {
        res.send({ status: "error", error: err });
      } else {
        res.send({
          id: req.params.id,
          message: "Updated Successfully!",
        });
      }
    }
  );
});
router.post("/login", async (req, res) => {
	console.log(req.body);
	res.send({ message: "got it" });
});

module.exports = router;
