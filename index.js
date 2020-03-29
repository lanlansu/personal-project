const express = require('express')
const app = express()
const port = 3000

//Middlewares
app.set('view engine', 'pug');
app.use(express.static('public'))

//Modules
const home = require('./routes/home');
app.get('/', home);

app.listen(port, () => console.log(`personal project running on port ${port}!`)) 