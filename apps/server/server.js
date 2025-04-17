require('dotenv').config();
const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const btsRouter = require('./api/btsRouter');
const usersRouter = require('./api/usersRouter');
const albumsRouter = require('./api/albumsRouter');
const songsRouter = require('./api/songsRouter');

const prisma = new PrismaClient();
const server = express();
const PORT = process.env.PORT || 8080;

server.use(express.json());
server.use(cors());

//ROUTERS
//users, bangtan, albums, songs
server.use('/api/bts', btsRouter);
server.use('/api/users', usersRouter);
server.use('/api/albums', albumsRouter);
server.use('/api/songs', songsRouter);


server.listen(PORT, () =>{
    console.log(`Magic happening on port: ${PORT}`);
})

server.use('*', (req, res) => {
    res.status(500).json({
        message: `[${req.method}]: ${req.url} not found!`
    })
})

module.exports = server;