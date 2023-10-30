import mongoose from "mongoose";

const {Schema, model} = mongoose;

const PropertySchema = new Schema(
    {
        
    }
);


const Property = model("Property", PropertySchema);

module.exports = Property;

