const express = require("express");
const landlordRoute = express.Router();

landlordRoute.get('/', (req, res) => {
    res.send("All users");
});

landlordRoute.get("/new", (req, res) => {
    res.send("new user");
});

module.exports = landlordRoute;
