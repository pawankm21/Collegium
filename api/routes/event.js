var express = require("express");
var router = express.Router();
var {User,Tag,Event}=require('../model')
// contains all event related endpoints

router.route('/').get((req, res) => {
  Event.find((err, foundEvents) => {
    if (!err)
    {
    res.send(foundEvents);
      
    }
    else {
      res.send(err);
    }
  }).post((req, res) => {
    
  })
})

module.exports = router;
