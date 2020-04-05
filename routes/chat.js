const Topic = require('../models/topic');

const chat = async (req, res) => {  
    const id = req.params.id;
    const topic = await Topic.findById(id).exec();
    console.log('user:', req.user)
    res.render('chat', {topic, user: req.user});
}

module.exports = chat;