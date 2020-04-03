const Topic = require('../../models/topic');
const update = async (req, res) => {
    const id = req.params.id;
    const topic = await Topic.findById(id).exec();
    res.render('admin/update', { topic })
}

module.exports = update;