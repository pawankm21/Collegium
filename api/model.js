const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String ,required:true},
  email: { type: String, unique: true ,required:true},
  password: String,
  gender: String,
  college: String,
});

const tagSchema = new mongoose.Schema({
  name: String,
  desc: String,
});

const eventSchema = new mongoose.Schema({
  name:String,
  message: String,
  coordinators: Array,
  when: Date,
  lastDate: Date,
  where: String,
  attendees: Array,
  tags: Array,
  image:String,
});

const User = mongoose.model("User", userSchema);
const Tag = mongoose.model("Tag", tagSchema);
const Event = mongoose.model("Event", eventSchema);

module.exports = { User, Tag, Event };
