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

//
router.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, foundUser) => {
        res.render('users/show.ejs', {
            user: foundUser
        });
    });
});

router.get('/:id/edit', (req, res) => {
    User.findById(req.params.id, (err, foundUser) => {
        res.render('users/edit.ejs', {
            user: foundUser
        });
    });
});


module.exports = router;