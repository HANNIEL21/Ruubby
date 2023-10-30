import Jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;

    if (authHeader) {
        Jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) res.status(403).json({ "message": "Invalid Token" });
            req.user = user;
            next();
        })
    } else {
        return res.status(401).json({ "message": "User not authenticated" });
    }
}

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.status(403).json({ "message": "Forbidden Access" });
        }
    });
}

export { verifyToken, verifyTokenAndAuthorization };
