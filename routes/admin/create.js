const Topic = require('../../models/topic');

const get = (req, res) => {
    res.render('admin/create');
}

const post = async (req, res) => {
    const newTopic = {
        title: req.body.title,
        times: req.body.times,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: req.body.content,
        image: '/img/upload/' + req.file.originalname,
        author: req.user._id
    }
    const topic = await new Topic(newTopic).save()
    console.log("New Topic: ", topic)
    res.redirect('/');   
}

module.exports = {
    get: get,
    post: post
};