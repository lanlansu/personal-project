const Topic = require('../../models/topic');
const adminDelete = async (req, res) => {
    const idToDelete = req.params.id;
    await Topic.deleteOne({ _id: idToDelete }).exec();
    res.redirect('/');
}


module.exports = adminDelete;