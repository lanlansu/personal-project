const mongoose = require('mongoose');
const Topic = require('../models/topic');
let uri = "mongodb://PersonalProject:1234@cluster0-shard-00-00-5c5bu.mongodb.net:27017,cluster0-shard-00-01-5c5bu.mongodb.net:27017,cluster0-shard-00-02-5c5bu.mongodb.net:27017/PersonalProject?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const home = async (req, res) => {  
    const topics = await Topic.find().exec();
    // const topics = [
    //     {
    //         id: 1,
    //         title: "dog1",
    //         times: 2,
    //         image:"https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2019/02/dog-451643.jpg?h=bf654dbc&itok=MQGvBmuo",
    //         content:"Wow..I surely missed a posting on this right? It is so important that we know what we should NOT give our pets. Below is a list of over the counter medications that we should never give our dogs." 
    //     },
    //     {

    //         id: 2,
    //         title: "dog2",
    //         times: 5,
    //         image:"https://www.vettedpetcare.com/vetted-blog/wp-content/uploads/2018/04/my-cat-is-nearing-end-of-life-square.jpeg",
    //         content:"Wow..I surely missed a posting on this right? It is so important that we know what we should NOT give our pets. Below is a list of over the counter medications that we should never give our dogs." 
            
    //     }
    // ]
    res.render('home', {topics});
}

module.exports = home;