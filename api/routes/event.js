var express = require("express");
var router = express.Router();
var {User,Tag,Event}=require('../model')
// contains all event related endpoints

router.route('/').get((req, res) => {
  Event.find((err, foundEvents) => {
    res.send(foundEvents);
  }).post((req, res) => {
    
  })
})

module.exports = router;
