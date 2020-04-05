const Topic = require('../../models/topic');
const update = async (req, res) => {
    const id = req.params.id;
    const updateTopic = {
        title: req.body.title,
        times: req.body.times,
        content: req.body.content,
        image: req.file.originalname
    }
    let filter = { _id: id };

    let result = await Topic.updateOne(filter, updateTopic).exec();
    console.log("Result: ", result)
    res.redirect('/chat/' + id);   
}

module.exports = update;