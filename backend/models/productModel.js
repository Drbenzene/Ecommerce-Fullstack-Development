import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    id: {type: String},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;