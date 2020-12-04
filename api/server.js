const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const logger = require('../data/middleware/logger');

const server = express();
server.use(helmet());
server.use(cors());
server.use(logger('long'));
server.use(express.json());

server.get('/', (req, res, next) => {
    res.json({
        message: 'Year One API'
    })
})

server.use((error, req, res, next) => {
    console.log("Error: ", error);
    res.status(500).json({
        message: "Something went horribly wrong.",
    })
})

module.exports = server;