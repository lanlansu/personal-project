//NPM Modules
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT || 3000
const multer  = require('multer');
const upload = multer({ dest: 'upload' });

//Middlewares
app.set('view engine', 'pug');
app.use(express.static('public'))

//Database connection
let uri = "mongodb://PersonalProject:1234@cluster0-shard-00-00-5c5bu.mongodb.net:27017,cluster0-shard-00-01-5c5bu.mongodb.net:27017,cluster0-shard-00-02-5c5bu.mongodb.net:27017/PersonalProject?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

//Costom Modules
const home = require('./routes/home');
const chat = require('./routes/chat');
const signIn = require('./routes/signIn');
const adminCreate = require('./routes/admin/create');
const adminCreatePost = require('./routes/admin/createPost');
const adminDelete = require('./routes/admin/delete');

//Routes
app.get('/', home);
app.get('/chat/:id', chat);
app.get('/signIn', signIn);
app.get('/admin/create', adminCreate);
app.post('/admin/create', upload.single('file'), adminCreatePost);
app.get('/admin/delete/:id', adminDelete);

app.listen(port, () => console.log(`personal project running on port ${port}!`)) 