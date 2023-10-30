const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const OtpSchema = new Schema({
    userID: { type: String },
    opt: { type: String },
    createdAt: { type: Date },
    expiresAt: { type: Date },
});

const Otp = model("Otp", OtpSchema);

module.exports = Otp;
