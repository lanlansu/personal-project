const User = require('../models/user');
const randAvatarId = () => {
  const indecies = [1,2,3,4,5,6];
  return indecies[Math.floor(Math.random() * 100) % indecies.length];
};
const signup = async (req, res) => {
    console.log("req", req.body)
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        avatar: '/img/avatar/avatar' + randAvatarId() + '.jpg'
    }
    const user = await new User(newUser).save()
    console.log("New User: ", user)
    res.redirect('/');   
}

module.exports = signup;