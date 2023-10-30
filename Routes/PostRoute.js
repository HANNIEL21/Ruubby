const express = require("express");
const postRoute = express.Router();

postRoute.get('/', (req, res) => {
    res.send("All posts");
});

postRoute.get("/new", (req, res) => {
    res.send("new post");
});

module.exports = postRoute;
