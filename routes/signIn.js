const get = (req, res) => {
    //console.log('error', req.query.error);
    const error = req.query.error;
    res.render('signIn', {error});
}

const post = async (req, res) => {
    res.redirect('/');   
}

module.exports = {get, post};