const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');

const usersController = require('./controllers/users');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/users', usersController);


app.get('/', (req, res) => {
    res.send('hello')
    // res.render('index.ejs');
});




app.listen(3000, () => {
    console.log("Server running");
});