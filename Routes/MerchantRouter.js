import express from 'express'
const merchantRoute = express.Router();

merchantRoute.get('/', (req, res) => {
    res.send("All merchants");
});

merchantRoute.get("/new", (req, res) => {
    res.send("new merchant");
});

export default merchantRoute;
