const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/collegiumDB', { useNewUrlParser: true });

const {User, Tag, Event} = require('./model');

// We can loop this part for each user

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
