const mongoose = require('mongoose');
//Mongoose Model (Work as a Schema)
const User = mongoose.model('User', {
    username: String,
    email: String,
    password: String
});

module.exports = User;