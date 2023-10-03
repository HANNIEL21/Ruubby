import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema(
    {
        firstName: { type: String, required: true, },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        userType: { type: String, required: true },
        referral: { type: String, },
        location: { type: String, },
        avatar: { type: String, },
        verified: {type: Boolean, default: false}

    },
    { timestamps: true }
);

const User = model("User", UserSchema);

export default User;
