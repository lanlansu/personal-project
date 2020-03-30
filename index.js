const express = require('express')
const app = express()
const port = process.env.PORT || 3000

//Middlewares
app.set('view engine', 'pug');
app.use(express.static('public'))

//Modules
const home = require('./routes/home');
const chat = require('./routes/chat');
app.get('/', home);
app.get('/chat', chat);

app.listen(port, () => console.log(`personal project running on port ${port}!`)) 