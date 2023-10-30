const mongoose = require("mongoose");
const { model } = mongoose;

const CartSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        products: [
            {
                productId: {
                    type: String
                },
                quality: {
                    type: Number,
                    default: 1,
                },
            },
        ]
    },
    { timestamps: true }
);

module.exports = model("User", CartSchema);
