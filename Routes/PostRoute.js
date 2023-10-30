import { Router } from "express";
const postRoute = Router();

postRoute.get('/', (req, res) => {
    res.send("All posts");
});

postRoute.get("/new", (req, res) => {
    res.send("new post");
});

export default postRoute;
