// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/collegiumDB', { useNewUrlParser: true });

const {User, Tag, Event} = require('./model');

// We can loop this part for each user
const user = new User({
    id: 1,
    name: 'Abhijit',
    email: 'random@gmail.com',
    password: 'tuhaikaun',
    gender: 'sigmamale'
});

User.insertMany([user], (err) => {
    console.log(err);
});
// We can loop this part for each tag
const tag = new Tag({
    name: 'Novice',
    desc: 'For new-comers'
});

Tag.insertMany([tag], (err) => {
    console.log(err);
});
// We can loop this part for each event
const event = new Event({
    name: 'Hacktoberfest 2021',
    message: 'Hacktoberfest is a hackathon event that is held annually in October, with the goal of encouraging and encouraging developers to create and share their creations. The event is open to anyone, from beginners to experts, and is a great way to get involved in the open source community and learn from other developers.',
    coordinators: ['Pawan', 'Abhinav'],
    when: new Date('2021-10-01'),
    lastDate: new Date('2021-09-28'),
    where: 'New Audi',
    attendees: ['Abhijit', 'Satyam', 'Divye'],
    tags: ['Novice', 'Beginner']
});

Event.insertMany([event], (err) => {
    console.log(err);
});

// Relationship b/w Tags and event tags
Event.aggregate([
    {
        $lookup: {
            from: 'tags',
            localField: 'tags',
            foreignField: 'name',
            as: 'matchedTags'
        },
    },
    {
        $unwind: '$matchedTags',
    },
]).then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});
// Relationship b/w User and event coordinators
Event.aggregate([
    {
        $lookup: {
            from: 'users',
            localField: 'coordinators',
            foreignField: 'name',
            as: 'matchedUsers'
        },
    },
    {
        $unwind: '$matchedUsers',
    },
]).then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});
// Relationship b/w User and event attendees
Event.aggregate([
    {
        $lookup: {
            from: 'users',
            localField: 'attendees',
            foreignField: 'name',
            as: 'matchedAttendees'
        },
    },
    {
        $unwind: '$matchedAttendees',
    },
]).then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});
