import express from "express";
import Jwt from "jsonwebtoken";
import User from "../models/user.js";
import { validateSignup } from "../utils/validateForm.js";
import CryptoJS from "crypto-js";

const AuthRouter = express.Router();

// User signup route
AuthRouter.post("/signup", async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber, userType, password, referral } = req.body;

        const existingUser = await User.findOne({ email: email });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: `User with email ${email} already exists`,
                data: null,
            });
        }

        // Use validateSignup middleware for form validation (if it exists)
        if (validateSignup) {
            validateSignup(req, res, async () => {
                // Encrypt the password using CryptoJS
                const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString();

                const newUser = new User({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: encryptedPassword,
                    phoneNumber: phoneNumber,
                    userType: userType,
                    referral: referral,
                });

                const savedUser = await newUser.save();

                // Remove sensitive information from the response
                const { password, ...userData } = savedUser._doc;

                res.status(201).json({
                    success: true,
                    message: `User ${firstName} has been created.`,
                    data: userData,
                });
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err,
        });
    }
});

// User login route
AuthRouter.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(401).json({ message: "Wrong user credentials" });
        }

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        if (originalPassword !== req.body.password) {
            return res.status(401).json({ message: "Wrong user credentials" });
        }

        const token = Jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT_SEC, { expiresIn: "1d" });

        // Remove sensitive information from the response
        const { password, ...userData } = user._doc;

        res.status(200).json({ ...userData, token });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error,
        });
    }
});

export default AuthRouter;
