import { Router } from 'express';
import User from '../models/user.js';
import { obfuscateUserId, obfuscateEmail, obfuscatePhoneNumber } from '../utils/helpers.js';

const merchantRoute = Router();

// Get all merchants
merchantRoute.get('/', async (req, res) => {
    try {
        const merchants = await User.find({ userType: "merchant" });

        if (merchants.length === 0) {
            return res.status(204).json({
                success: true,
                message: "Merchant list is empty",
                data: merchants,
            });
        }

        // Extract only the needed information from each user
        const simplifiedMerchants = merchants.map((user) => {
            const id = obfuscateUserId(user._id.toString());
            const email = obfuscateEmail(user.email);
            const phone = obfuscatePhoneNumber(user.phoneNumber);

            return {
                id: id,
                avatar: "",
                name: `${user.firstName} ${user.lastName}`,
                email: email,
                phoneNumber: phone,
                userType: user.userType,
            };
        });

        res.status(200).json({
            success: true,
            message: "All Merchants",
            data: simplifiedMerchants,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve merchants",
            error: error,
        });
    }
});

// Get a new merchant form (you can customize this as needed)
merchantRoute.get("/new", (req, res) => {
    res.send("Create a new merchant form here.");
});

export default merchantRoute;
