import { Router } from "express";
const landlordRoute = Router();

landlordRoute.get('/', (req, res) => {
    res.send("All users");
});

landlordRoute.get("/new", (req, res) => {
    res.send("new user");
});

export default landlordRoute;
