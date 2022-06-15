const Product = require('../model/Product')

const createProducto = (req, res) => {
    let product = new Product({
        categoria: req.body.categoria,
        Nombre_Producto: req.body.Nombre_Producto,
        Talla: req.body.Talla,
        Precio: req.body.Precio,
        Stock: req.body.Stock
    })

    product.save((err, prod) => {
        err && res.status(500).json(err.messaje)
        res.status(200).json(prod)
    })
}

const getProductos = (req, res) => {
    Product.find((err, products) => {
        err && res.status(500).send(err.message)
        res.status(200).json(products)
    })
}

const updatePrecio = (req, res) => {
    try {
        Product.findOneAndUpdate({Nombre_Producto: req.body.Nombre_Producto}, {Precio: req.body.Precio}, (err, prod) => {
            err && res.status(500).send(err.message)
            res.status(200).send(prod)
        })
    }catch(error) {
        res.status(404).send({error: "Cliente no encontrado"})
    }
}

const deleteProducto = (req, res) => {
    Product.findOneAndDelete({Nombre_Producto: req.body.Nombre_Producto}, (err, prod) => {
        err && res.status(501).send(err.message)
        res.status(200).send(prod)
    })
}
module.exports = {createProducto, getProductos, updatePrecio, deleteProducto}