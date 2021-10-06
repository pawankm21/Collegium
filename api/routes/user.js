var express = require("express");
var router = express.Router();
const { User, Tag, Event } = require("../model");
// all endpoints related to the user

router.get("/",  (req, res, next) =>{
  User.find((err, foundUsers) => {
    if (!err) {
      res.send(foundUsers);
    } else {
      res.send(err);
    }
  });
});
router.post("/", (req, res, next) => {
  console.log(request.body);
})
module.exports = router;
