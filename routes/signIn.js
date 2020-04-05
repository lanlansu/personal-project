const signIn = (req, res) => {
    //console.log('error', req.query.error);
    const error = req.query.error;
    res.render('signIn', {error});
}

module.exports = signIn;