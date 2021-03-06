const Topic = require('../models/topic');

const chat = async (req, res) => {  
    const id = req.params.id;
    const topic = await Topic.findById(id).populate('author comments.author').exec();
    //console.log('user:', req.user)
    console.log('topic:', topic)
    res.render('chat', {topic, user: req.user});
}

module.exports = chat;