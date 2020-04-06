const Topic = require('../models/topic');
const comment = async (req, res) => {
    const id = req.body.topicId;
    console.log("body", req.body);
    const topic = await Topic.findById(id).exec();
    console.log("topic: ", topic)
    topic.comments.push({
        comment: req.body.comment,
        author: req.user._id
    });

    let filter = { _id: id };
    let result = await Topic.updateOne(filter, topic).exec();
    console.log("Result: ", result)
    res.redirect('/chat/' + id);   
}

module.exports = comment;