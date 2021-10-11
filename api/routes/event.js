var express = require("express");
var router = express.Router();
var { User, Tag, Event } = require("../model");
// contains all event related endpoints

router.get("/getEvent", (req, res) => {
  var now = new Date();
  Event.find(
    { when: { $gte: now } },
    "name when lastDate tags where",
    (err, event) => {
      res.send(event);
    }
  );
});
router.get("/getEvent/:eventID", (req, res) => {
  {
    Event.findById(req.params.eventID, (err, event) => {
      res.send(event);
    });
  }
});


module.exports = router;
