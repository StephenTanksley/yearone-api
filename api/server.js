// Server setup
const express = require("express");
const server = express();

// Middleware
const helmet = require("helmet");
const cors = require("cors");
const logger = require("../data/middleware/logger");

// Routers
const searchRouter = require("../data/routes/searchRouter");
const filmsRouter = require("../data/routes/filmsRouter");

server.use(helmet());
server.use(cors());
server.use(logger("long"));
server.use(express.json());

server.use("/search", searchRouter);

server.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Year One API",
  });
});

server.use((error, req, res, next) => {
  console.log("Error: ", error);
  res.status(500).json({
    message: "Something went horribly wrong.",
  });
});

module.exports = server;
