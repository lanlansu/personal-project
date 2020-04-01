const mongoose = require('mongoose');
const Topic = require('../../models/topic');
let uri = "mongodb://PersonalProject:1234@cluster0-shard-00-00-5c5bu.mongodb.net:27017,cluster0-shard-00-01-5c5bu.mongodb.net:27017,cluster0-shard-00-02-5c5bu.mongodb.net:27017/PersonalProject?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
console.log("connect DB succesfully");
const create = async (req, res) => {
    console.log('req.body:', req.body);
    const newTopic = {
        title: req.body.title,
        times: req.body.times,
        content: req.body.content,
        image: req.body.image
    }
    console.log('newTopic:', newTopic);
    const topic = await new Topic(newTopic).save()
    console.log("New Topic: ", topic)
    res.redirect('/');
}

module.exports = create;