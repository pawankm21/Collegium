const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String },
  gender: String,
  college: String,
  dob: Date,
  branch: String,
  roll: String,
  imageurl: String,
});

const eventSchema = new mongoose.Schema({
  name: String,
  message: String,
  coordinators: [{ type: Schema.Types.ObjectId, ref: "User" }],
  when: Date,
  lastDate: Date,
  tillWhen: Date,
  where: String,
  attendees: [{ type: Schema.Types.ObjectId, ref: "User" }],
  tags: [String],
  imageurl: String,
  type: String,
  tagLine: String,
});

const User = mongoose.model("User", userSchema);
const Event = mongoose.model("Event", eventSchema);

module.exports = { User, Event };
