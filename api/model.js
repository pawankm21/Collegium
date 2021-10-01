const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    id: Number,
    name: String,
    email: String,
    password: String,
    gender: String
});

const tagSchema = new mongoose.Schema ({
    name: String,
    desc: String
});

const eventSchema = new mongoose.Schema ({
    name: String,
    message: String,
    coordinators: Array,
    when: Date,
    lastDate: Date,
    where: String,
    attendees: Array,
    tags: Array
});

const User = mongoose.model('User', userSchema);
const Tag = mongoose.model('Tag', tagSchema);
const Event = mongoose.model('Event', eventSchema);

module.exports = {User, Tag, Event};