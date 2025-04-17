const express = require('express');
const router = express.Router();

//register
router.post('/register', (req, res) => {
    const newUser = req.body;
    res.status(201).json({
        message: 'User registered',
        data: newUser
    });
});

//login
// router.post('/login', (req, res, next) => {
//
// })

//getAllUsers

//getUserById

//updateUser

//deleteUser


module.exports = router;