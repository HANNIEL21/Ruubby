import express from "express";
const propertiesRoute = express.Router();

propertiesRoute.get('/', (req,res)=> {
    res.send("All propertiess");
});

propertiesRoute.get("/new", (req, res) => {
    res.send("new properties");
});

export default propertiesRoute;
