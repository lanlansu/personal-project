//NPM Modules
const express = require('express');
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose');
const ensureLogin = require('connect-ensure-login').ensureLoggedIn;

const multer  = require('multer');
const passport  = require('passport');

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/upload')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage });

//Middlewares
app.set('view engine', 'pug');
app.use(express.static('public'));
//body-parser
app.use(express.urlencoded({ extended: true }));
//session handling
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport and restore authentication state, if any, from the
// session
app.use(passport.initialize());
app.use(passport.session());

//Database connection
let uri = "mongodb://PersonalProject:1234@cluster0-shard-00-00-5c5bu.mongodb.net:27017,cluster0-shard-00-01-5c5bu.mongodb.net:27017,cluster0-shard-00-02-5c5bu.mongodb.net:27017/PersonalProject?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

//Costom Modules
const home = require('./routes/home');
const chat = require('./routes/chat');
const signIn = require('./routes/signIn');
const handleSignin = require('./routes/handleSignin');
const logOut = require('./routes/logout');
const signUp = require('./routes/signUp');
const handleSignup = require('./routes/handleSignup');
const adminCreate = require('./routes/admin/create');
const adminCreatePost = require('./routes/admin/createPost');
const adminDelete = require('./routes/admin/delete');
const adminUpdate = require('./routes/admin/update');
const adminUpdatePost = require('./routes/admin/updatePost');
require('./config/passport-config');

//Routes
app.get('/', home);
app.get('/chat/:id', chat);
app.get('/signIn', signIn);
app.post('/signIn', passport.authenticate('local', { failureRedirect: '/signIn?error=' +  'Invalid username and value'}), handleSignin);
app.get('/signUp', signUp);
app.post('/signUp', handleSignup);
app.get('/admin/create', ensureLogin('/signIn'), adminCreate);
app.post('/admin/create', ensureLogin('/signIn'), upload.single('file'), adminCreatePost);
app.post('/admin/update/:id', ensureLogin('/signIn'), upload.single('file'), adminUpdatePost);
app.get('/admin/update/:id', ensureLogin('/signIn'), adminUpdate);
app.get('/logout', logOut);
app.get('/admin/delete/:id', ensureLogin('/signIn'), adminDelete);

app.listen(port, () => console.log(`personal project running on port ${port}!`)) 