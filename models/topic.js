const mongoose = require('mongoose');
//Mongoose Model (Work as a Schema)
const Topic = mongoose.model('Topic', {
    title: String,
    times: Number,
    createdAt: Date,
    updatedAt: Date,
    updatedAtFormatted: String,
    image: String,
    content: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        comment: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }]
});

module.exports = Topic;