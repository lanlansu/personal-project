const mongoose = require('mongoose');
//Mongoose Model (Work as a Schema)
const Topic = mongoose.model('Topic', {
    title: String,
    times: Number,
    createdAt: Date,
    updatedAt: Date,
    image: String,
    content: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

module.exports = Topic;