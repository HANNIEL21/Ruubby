const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ProductSchema = new Schema(
    {
        title: { type: String, required: true },
        desc: { type: String, required: true },
        owner: { type: String, required: true },
        price: { type: String, required: true },
        category: { type: Array, required: true },
        imges: { type: Array },
        brand: { type: String },
        size: { type: String },
    },
    { timestamps: true }
);

const Product = model("Product", ProductSchema);

module.exports = Product;
