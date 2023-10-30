const express = require("express");
const User = require("../models/user.js");
const { verifyTokenAndAuthorization } = require("../utils/verifyToken.js");
const userRouter = express.Router();


function hidePhoneNumber(phoneNumber) {
    if (phoneNumber.length >= 6) {
        // Replace characters from the 3rd number to the last 3 numbers with '*'
        const hiddenPart = phoneNumber.substring(3, phoneNumber.length - 3).replace(/\d/g, "*");
        return phoneNumber.substring(0, 3) + hiddenPart + phoneNumber.substring(phoneNumber.length - 3);
    } else {
        return phoneNumber; // Return the original phone number if it's too short to hide
    }
};

// get all users
userRouter.get("/", async (req, res) => {
    try {
        const users = await User.find();

        if (users.length === 0) {
            return res.status(204).json({
                success: true,
                message: "User List is Empty",
                data: [],
            });
        }

        // Extract only the needed information from each user
        const simplifiedUsers = users.map((user) => {
            const email = user.email.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, "$1***@$2");
            const phone = hidePhoneNumber(user.phoneNumber);


            return {
                avatar: "",
                name: user.firstName + " " + user.lastName,
                email: email,
                phoneNumber: phone,
                userType: user.userType,
            };
        });

        res.status(200).json({
            success: true,
            message: "All Users",
            data: simplifiedUsers,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            data: [],
        });
    }
});

// get a user

// update a user

// delete a user

userRouter.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
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

module.exports = userRouter;
