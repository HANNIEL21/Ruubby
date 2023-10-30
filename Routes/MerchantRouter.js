import { Router } from 'express';
const merchantRoute = Router();

merchantRoute.get('/', (req, res) => {
    res.send("All merchants");
});

merchantRoute.get("/new", (req, res) => {
    res.send("new merchant");
});

export default merchantRoute;
