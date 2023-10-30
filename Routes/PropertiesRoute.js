import { Router } from "express";
const PropertiesRoute = Router();

PropertiesRoute.get('/', (req, res) => {
    res.send("All propertiess");
});

PropertiesRoute.get("/new", (req, res) => {
    res.send("new properties");
});

export default PropertiesRoute;
