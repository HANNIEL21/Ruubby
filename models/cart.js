import mongoose, { model } from "mongoose";


const CartSchema = new mongoose.Schema(
    {
        userId: {type: String, required:true},
        products: [
            {
                productId:{
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

export default mongoose.model("User", CartSchema);