const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
    {
        id: { type: Number },
        category: { type: String },
        product_Name: { type: String },
        size: { type: Number },
        price: { type: Number },
        stock: { type: Number }
    },
    {
        collection: "products",
        versionKey: false
    }

);
module.exports = mongoose.model("products", productsSchema);