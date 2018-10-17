const express = require('express');
const router = express.Router();

const Users = require('../models/users');


//Index route
router.get('/', (req, res) => {
    Users.find({}, (err, foundUsers) => {
        res.render('users/index.ejs', {
            users: foundUsers
        });       
    });
});

//New route
router.get('/new', (req, res) => {
    res.render('users/new.ejs');
});

router.get('/:id', (req, res) => {
    Users.findById(req.params.id, (err, foundUser) => {
        console.log(foundUser)
        res.render('users/show.ejs', {
            users: foundUser
        });
    });
});

router.get('/:id/edit', (req, res) => {
    Users.findById(req.params.id, (err, foundUser) => {
        res.render('users/edit.ejs', {
            users: foundUser
        });
    });
});


router.post('/', (req, res) => {
    Users.create(req.body, (err, createdUser) => {
        
        if(err){
            console.log(err)
          } else {
            res.redirect('/users')
          }
        });
});

router.delete('/:id', (req, res) => {
    Users.findByIdAndRemove(req.params.id, () => {
        res.redirect('/users');
    });
});

router.put('/:id', (req, res) => {
    Users.findOneAndDelete(req.params.id, req.body, () => {
        res.redirect('/users');

    });
});



module.exports = router;