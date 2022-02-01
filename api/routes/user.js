var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../model");
var { deleteImage, uploadImage } = require("../cloudinary");

// all endpoints related to the user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.json({ status: "error", user: false });
  }
  const validPass = await bcrypt.compare(password, user.password);
  if (validPass) {
    const token = jwt.sign(
      { name: user.name, email: user.email },
      process.env.secret
    );
    return res.json({ status: "success", user: user._id });
  } else {
    return res.json({ status: "error", user: false });
  }
});
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
        imageurl: user.imageurl,
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
        message: "Email already exists!!",
      });
    } else {
      res.send({
        status: "success",
        id: newUser._id,
        message: "New User Created Successfully!",
      });
    }
  });
});

router.patch("/updateUser/:id", async (req, res) => {
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  console.log(updateOps);
  if (updateOps.password) {
    const hashedPass = await bcrypt.hash(updateOps.password, 10);
    updateOps.password = hashedPass;
  }
  User.updateOne({ _id: req.params.id }, { $set: updateOps }, (err, user) => {
    if (err) {
      res.send({
        status: "error",
        error: err,
        message: "Error in updating user",
      });
    } else {
      res.send({
        status: "success",
        message: "User Updated Successfully!",
        user,
      });
    }
  });
});

module.exports = router;
