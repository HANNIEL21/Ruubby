import { Router } from "express";
import User from "../models/user.js";
import { obfuscateUserId, obfuscateEmail, obfuscatePhoneNumber } from "../utils/helpers.js";

const landlordRoute = Router();

// Get all landlords
landlordRoute.get('/', async (req, res) => {
    try {
        const landlords = await User.find({ userType: "landlord" });

        if (landlords.length === 0) {
            return res.status(204).json({
                success: true,
                message: "Landlord list is empty",
                data: landlords,
            });
        }

        // Extract only the needed information from each user
        const simplifiedLandlords = landlords.map((user) => {
            const id = obfuscateUserId(user._id.toString());
            const email = obfuscateEmail(user.email);
            const phone = obfuscatePhoneNumber(user.phoneNumber);

            return {
                id: id,
                avatar: "", // You can add an avatar URL here
                name: `${user.firstName} ${user.lastName}`,
                email: email,
                phoneNumber: phone,
                userType: user.userType,
            };
        });

        res.status(200).json({
            success: true,
            message: "All Landlords",
            data: simplifiedLandlords,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve landlords",
            error: error,
        });
    }
});

// Get a new user form (you can customize this as needed)
landlordRoute.get("/new", (req, res) => {
    res.send("Create a new user form here.");
});

export default landlordRoute;
