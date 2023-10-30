import { Router } from "express";
const orderRoute = Router();

orderRoute.get('/', (req,res)=> {
    res.send("All orders");
});

orderRoute.get("/new", (req, res) => {
    res.send("new order");
});

export default orderRoute;
