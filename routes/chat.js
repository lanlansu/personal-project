const Topic = require('../models/topic');

const chat = async (req, res) => {  
    const id = req.params.id;
    const topic = await Topic.findById(id).exec();
    res.render('chat', {topic});
}

module.exports = chat;