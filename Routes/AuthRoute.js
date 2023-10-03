import express from "express";
import CryptoJS from "crypto-js";
import Jwt from "jsonwebtoken";
import User from "../models/user.js";
import { validateSignup } from "../utils/validateForm.js";
import sendOtp from "../utils/createAndVerifyOtp.js";

const AuthRouter = express.Router();



AuthRouter.post("/signup", async (req, res) => {
    try {
        // Destructure the request body for better readability
        const { firstName, lastName, email, phoneNumber, userType, password, referral } = req.body;

        // Call the validateSignup middleware to perform validation
        validateSignup(req, res, async () => {
            // Encrypt the password using CryptoJS
            const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString();

            // Create a new User instance
            const newUser = new User({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: encryptedPassword, // Assign the encrypted password
                phoneNumber: phoneNumber,
                userType: userType,
                referral: referral,
            });

            // Save the new user to the database
            const savedUser = await newUser.save().then((data) => sendOtp(data, res));

            // Log the saved user and send it as a JSON response
            console.log(savedUser);
            res.status(201).json({
                status: "Successful",
                message: `User ${firstName} has been created.`,
                data: savedUser,
            });
        });
    } catch (err) {
        // Handle any errors and return a 500 Internal Server Error response
        console.error(err);
        res.status(500).json({
            status: "FAILED",
            message: `${err}`
        });
    }
});



AuthRouter.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(401).json({ "message": "Wrong user credential!" });
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        OriginalPassword !== req.body.password && res.status(500).json({ "message": "Wrong user credentials" });
        const token = Jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT_SEC, { expiresIn: "1d" });

        const { password, ...data } = user._doc;

        res.status(200).json({ ...data, token });
    } catch (error) {

    }
});

export default AuthRouter;
