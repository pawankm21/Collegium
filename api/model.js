const mongoose = require("mongoose");
const Schema =mongoose.Schema
const userSchema = new mongoose.Schema({
  name: { type: String ,required:true},
  email: { type: String, unique: true, required: true },
  password:{type:String},
  gender: String,
  college: String,
  dob: Date,
  branch: String,
  roll:String,
  
});

const tagSchema = new mongoose.Schema({
  name: String,
  desc: String,
});

const eventSchema = new mongoose.Schema({
  name: String,
  message: String,
  coordinators: [{type:Schema.Types.ObjectId, ref:"User"}],
  when: Date,
  lastDate: Date,
  tillWhen: Date,
  where: String,
  attendees:[ { type: Schema.Types.ObjectId, ref: "User" }],
  tags: [{ type: Schema.Types.ObjectId, ref:"Tag"}],
  imageurl: String,
  type: String,
  tagLine: String,
});


const User = mongoose.model("User", userSchema);
const Tag = mongoose.model("Tag", tagSchema);
const Event = mongoose.model("Event", eventSchema);

module.exports = { User, Tag, Event };
