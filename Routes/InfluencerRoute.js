const express = require("express");
const InfluencerRoute = express.Router();

InfluencerRoute.get('/', (req, res) => {
    res.send("All influencers");
});

InfluencerRoute.get("/new", (req, res) => {
    res.send("new influencer");
});

module.exports = InfluencerRoute;