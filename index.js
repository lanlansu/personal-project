const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const multer  = require('multer');
const upload = multer({ dest: 'upload' });

//Middlewares
app.set('view engine', 'pug');
app.use(express.static('public'))

//Modules
const home = require('./routes/home');
const chat = require('./routes/chat');
const signIn = require('./routes/signIn');
const adminCreate = require('./routes/admin/create');
const adminCreatePost = require('./routes/admin/createPost');

app.get('/', home);
app.get('/chat', chat);
app.get('/signIn', signIn);
app.get('/admin/create', adminCreate);
app.post('/admin/create', upload.single('file'), adminCreatePost);

app.listen(port, () => console.log(`personal project running on port ${port}!`)) 