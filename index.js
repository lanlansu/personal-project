const express = require('express')
const app = express()
const port = 3000

//Middlewares
app.set('view engine', 'pug');

//Modules
const home = require('./routes/home');
app.get('/', home);

app.listen(port, () => console.log(`Shopping cart running on port ${port}!`)) 