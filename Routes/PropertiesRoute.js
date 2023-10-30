const express = require("express");
const PropertiesRoute = express.Router();

PropertiesRoute.get('/', (req, res) => {
    res.send("All propertiess");
});

PropertiesRoute.get("/new", (req, res) => {
    res.send("new properties");
});

module.exports = PropertiesRoute;
