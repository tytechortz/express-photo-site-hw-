const express = require('express');
const router = express.Router();

const User = require('../models/users');


//Index route
router.get('/', (req, res) => {
    User.find({}, (err, foundUsers) => {
        res.render('users/index.ejs', {
            users: foundUsers
        });       
    });
});


//New route
router.get('/new', (req, res) => {
    res.render('users/new.ejs');
});




module.exports = router;