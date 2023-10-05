import express from "express";
import User from "../models/user.js";
import { verifyTokenAndAuthorization } from "../utils/verifyToken.js";
const userRouter = express.Router();


// get all users

// get a user

// update a user

// delete a user

userRouter.put("/:id", verifyTokenAndAuthorization ,async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }

})

export default userRouter;
