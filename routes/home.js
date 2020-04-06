const Topic = require('../models/topic');
//const moment = require('moment');

const home = async (req, res) => {  
    const topics = await Topic.find().populate('author').exec();
    // topics.forEach(item => {
    //     console.log('item', item);
    //     item.updatedAtFormatted = moment(item.updatedAt).fromNow();
    //     console.log('item', item);
    // })
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
    //         content:"Wow..I surely missed a posting on this right? It is so important that we know what we should NOT give our pets. Below is a list of over th. counter medications that we should never give our dogs." 
            
    //     }
    // ]
    console.log('user', req.user)
    res.render('home', {topics, user: req.user});
}

module.exports = home;