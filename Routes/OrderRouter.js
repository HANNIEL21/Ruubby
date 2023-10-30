const express = require("express");
const orderRoute = express.Router();

orderRoute.get('/', (req,res)=> {
    res.send("All orders");
});

orderRoute.get("/new", (req, res) => {
    res.send("new order");
});

module.exports = orderRoute;
