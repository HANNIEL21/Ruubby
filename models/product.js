import mongoose, { model } from "mongoose";


const ProjectSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true,},
        img: { type: String, required: true,},
        categories: { type: Array },
        brand: {type: String},
        owner: {type: String},
        size: { type: String},
        price: { type: Number, required: true},
    },
    { timestamps: true }
);

export default mongoose.model("Project", ProjectSchema);