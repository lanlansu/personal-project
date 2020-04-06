const Topic = require('../../models/topic');

const get = async (req, res) => {
    const id = req.params.id;
    const topic = await Topic.findById(id).exec();
    res.render('admin/update', { topic })
}

const post = async (req, res) => {
    const id = req.params.id;
    const updateTopic = {
        title: req.body.title,
        times: req.body.times,
        updatedAt: new Date(),
        content: req.body.content,
        image: '/img/upload/' + req.file.originalname
    }
    let filter = { _id: id };

    let result = await Topic.updateOne(filter, updateTopic).exec();
    console.log("Result: ", result)
    res.redirect('/chat/' + id);   
}

module.exports = {get, post};