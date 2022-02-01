var express = require("express");
var router = express.Router();
var { deleteImage, uploadImage } = require("../cloudinary");
var { User, Tag, Event } = require("../model");

router.get("/getEvent", (req, res) => {
  var now = new Date();
  Event.find(
    { when: { $gte: now } },

    (err, events) => {
      if (err) {
        res.send(err);
      } else {
        res.send(events);
      }
    }
  );
});
router.get("/getEvent/:id", (req, res) => {
  {
    Event.findById(req.params.id, (err, event) => {
      if (err) {
        res.send(err);
      } else {
        res.send(event);
      }
    });
  }
});
router.get("/countEvent/:id", async (req, res) => {
  var now = new Date();
  try {
    var upcoming = await Event.count({
      when: { $gte: now },
      attendees: req.params.id,
    });
    var past = await Event.count({
      when: { $lt: now },
      attendees: req.params.id,
    });
    var conducted = await Event.count({
      coordinators: req.params.id,
    });
    res.send({ upcoming, past, conducted });
  } catch (err) {
    res.send(err);
  }
});
router.get("/coordinator/:id", (req, res) => {
  var now = new Date();
  Event.find(
    {
      // when: { $gte: now },
      coordinators: req.params.id,
    },
    (err, events) => {
      if (err) {
        res.send(err);
      } else {
        res.send(events);
      }
    }
  );
});

router.get("/college/:name", (req, res) => {
  Event.find({ college: req.params.name }, (err, events) => {
    if (err) {
      res.send(err);
    } else {
      res.send(events);
    }
  });
});
router.get("/attendee/:id", (req, res) => {
  Event.find({ attendees: req.params.id }, (err, events) => {
    if (err) {
      res.send(err);
    } else {
      res.send(events);
    }
  });
});
router.get("/past", (req, res) => {
  var now = new Date();
  Event.find({ when: { $lte: now } }, (err, events) => {
    if (err) {
      res.send(err);
    } else {
      res.send(events);
    }
  });
});
router.post("/createEvent/:id", (req, res) => {
  console.log(req.body);
  const newEvent = new Event(req.body);

  newEvent.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send({
        id: newEvent._id,
        message: "Event Created Successfully!",
      });
    }
  });
});
router.patch("/updateEvent/:id", (req, res) => {
  var updateOps = {};

  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  console.log(updateOps);
  Event.updateOne(
    { _id: req.params.id },
    {
      $set: updateOps,
    },
    (err, event) => {
      if (err) {
        res.send({
          status: "error",
          message: "Error in updating event",
          error: err,
        });
      } else {
        res.send({
          id: req.params.id,
          message: "Updated Successfuly!",
          event,
        });
      }
    }
  );
});
router.post("/addCoordinator/:EventId", (req, res) => {
  console.log(req.body);
  const { userId } = req.body;
  Event.updateOne(
    {
      _id: req.params.EventId,
    },
    {
      $addToSet: { coordinators: userId },
    },
    (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send({
          id: userId,
          message: "successfully added coordinator to event",
          date: new Date().toLocaleDateString(),
        });
      }
    }
  );
});
router.post("/addAttendee/:EventId", (req, res) => {
  console.log(req.body);
  const { userId } = req.body;
  Event.updateOne(
    {
      _id: req.params.EventId,
    },
    {
      $addToSet: { attendees: userId },
    },
    (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send({
          message: "successfully registered to event",
          date: new Date().toLocaleDateString(),
        });
      }
    }
  );
});
router.delete("/deleteEvent/:id", async (req, res) => {
  Event.findById(
    {
      _id: req.params.id,
    },
    (err, event) => {
      if (err) res.send(err);
      else {
        console.log(event);
        Event.deleteOne(
          {
            _id: req.params.id,
          },
          (err) => {
            deleteImage(event.image_id);
            if (err) res.send(err);
            else
              res.send({
                message: "Event Deleted Successfully!",
              });
          }
        );
      }
    }
  );
});
module.exports = router;
