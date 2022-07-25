const express = require("express");
const product = require("../models/products");
const router = express.Router();

//Get all Products
router.get("/products", async (req, res) => {
    try {
        const products = await product.find();
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Get product by productId

router.get('/product/:id', async (req, res) => {
    try {
        const productObject = await product.findOne({ id: req.params.id })
        if (productObject == null) {
            res.status(400).json(404);
        } else {
            res.json(productObject);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Create/Insert one product
router.post('/product', async (req, res) => {
    const productObject = new product({
        id: req.body.id,
        category: req.body.category,
        product_Name: req.body.product_Name,
        sice: req.body.sice,
        price: req.body.price
    });

    try {
        const productToSave = await productObject.save();
        res.status(200).json(productToSave);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;