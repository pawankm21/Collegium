var express = require("express");
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require("../model");

// all endpoints related to the user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email});
  if (!user) {
    return res.json({ status: 'error', user: false });
  }
  const validPass = await bcrypt.compare(password, user.password);
  if (validPass) {
    const token=jwt.sign({name:user.name,email:user.email},process.env.secret)
    return res.json({status:'success',user:user._id})
  }
  else {
    return res.json({ status: 'error', user: false });
  }
})
router.get("/getUser/:id", (req, res) => {
  // console.log(req.params);
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
  var userData = req.body;
  const hashedPass = await bcrypt.hash(userData.password, 10);
  userData = { ...userData, password: hashedPass };
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
