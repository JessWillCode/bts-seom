require('dotenv').config();
const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const btsRouter = require('./routes/btsRouter');
const usersRouter = require('./routes/usersRouter');
const albumsRouter = require('./routes/albumsRouter');
const songsRouter = require('./routes/songsRouter');

const server = express();
const PORT = process.env.PORT || 8080;

server.use(express.json());
server.use(cors());

//ROUTERS
//users, bangtan, albums, songs
server.use('/routes/bts', btsRouter);
server.use('/routes/users', usersRouter);
server.use('/routes/albums', albumsRouter);
server.use('/routes/songs', songsRouter);


server.listen(PORT, () =>{
    console.log(`Magic happening on port: ${PORT}`);
})

server.use('*', (req, res) => {
    res.status(500).json({
        message: `[${req.method}]: ${req.url} not found!`
    })
})

module.exports = server;