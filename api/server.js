const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// Middleware
const logger = require("../data/middleware/logger");

// Routers
const searchRouter = require("../data/routes/searchRouter");
const favoritesRouter = require("../data/routes/favoritesRouter");

const server = express();
server.use(helmet());
server.use(cors());
server.use(logger("long"));
server.use(express.json());

server.use("/search", searchRouter);

server.get("/", (req, res, next) => {
  res.json({
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
