const express = require('express');
const router = express.Router();
const prisma = require('../config/client');

//register
router.post('/register', (req, res, next) => {
    const newUser = req.body;
    res.status(201).json({
        message: 'User registered',
        data: newUser
    });
    next();
});

//login
// router.post('/login', (req, res, next) => {
//
// })

//getAllUsers
router.get('/', (req,res,next) => {

})

//getUserById

//updateUser

//deleteUser


module.exports = router;