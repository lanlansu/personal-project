const Topic = require('../../models/topic');
const create = async (req, res) => {
    const newTopic = {
        title: req.body.title,
        times: req.body.times,
        content: req.body.content,
        image: '/img/upload/' + req.file.originalname,
        author: req.user._id
    }
    const topic = await new Topic(newTopic).save()
    console.log("New Topic: ", topic)
    res.redirect('/');   
}

module.exports = create;