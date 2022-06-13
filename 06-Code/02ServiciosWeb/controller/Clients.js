const Client = require('../model/Client')

const createProduct = (req, res) => {
    let client = new Client({
        categoria: req.body.categoria,
        Nombre_Producto: req.body.Nombre_Producto,
        Talla: req.body.Talla,
        Precio: req.body.Precio,
        Stock: req.body.Stock
    })

    client.save((err, cli) => {
        err && res.status(500).json(err.messaje)
        res.status(200).json(cli)
    })
}

const getProducts = (req, res) => {
    Client.find((err, clients) => {
        err && res.status(500).send(err.message)
        res.status(200).json(clients)
    })
}

const updatePrecio = (req, res) => {
    try {
        Client.findOneAndUpdate({Nombre_Producto: req.body.Nombre_Producto}, {Precio: req.body.Precio}, (err, cli) => {
            err && res.status(500).send(err.message)
            res.status(200).send(cli)
        })
    }catch(error) {
        res.status(404).send({error: "Cliente no encontrado"})
    }
}

const deleteProduct = (req, res) => {
    Client.findOneAndDelete({Nombre_Producto: req.body.Nombre_Producto}, (err, cli) => {
        err && res.status(501).send(err.message)
        res.status(200).send(cli)
    })
}
module.exports = {createProduct, getProducts, updatePrecio, deleteProduct}