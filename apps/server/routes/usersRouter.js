const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

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
router.get('/', async (req,res,next) => {
    try{
        const users = await prisma.user.findMany();
        res.status(200).json(users);
        next()
    } catch(err){
        res.status(500).json({
            message: 'Something went wrong',
        })
    }


})

//getUserById

//updateUser

//deleteUser


module.exports = router;