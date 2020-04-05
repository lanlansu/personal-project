const User = require('../models/user');
const signup = async (req, res) => {
    console.log("req", req.body)
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        avatar: '/img/avatar/avatar' + 1 + '.jpg'
    }
    const user = await new User(newUser).save()
    console.log("New User: ", user)
    res.redirect('/');   
}

module.exports = signup;