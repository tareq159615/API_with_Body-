const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/e-comm");

const ProductSchema = new mongoose.Schema({
    name : String, 
    price: Number, 
    brand: String, 
    category: String
}); 
const Product = mongoose.model('products',ProductSchema);

module.exports = Product; 