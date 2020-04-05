const logOut = (req, res) => {
    req.logOut();
    res.redirect('/');
}

module.exports = logOut;