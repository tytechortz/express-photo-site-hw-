const express = require('express');
const router = express.Router();

const User = require('../models/user');



router.get('/', (req, res) => {
    User.find({}, (err, foundUsers) => {
        res.render('users/index.ejs', {
            users: foundUsers
        });
    });
});

module.exports = router;