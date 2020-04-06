const mongoose = require('mongoose');
const moment = require('moment');
//Mongoose Model (Work as a Schema)
const TopicSchema = new mongoose.Schema({
    title: String,
    times: Number,
    createdAt: Date,
    updatedAt: Date,
    // updatedAtFormatted: String,
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

TopicSchema.virtual('updatedAtFormatted').get(function () {
  return moment(this.updatedAt).fromNow();
});
const Topic = mongoose.model('Topic', TopicSchema);

module.exports = Topic;