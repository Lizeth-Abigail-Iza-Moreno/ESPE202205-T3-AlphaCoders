const Client = require('../model/Client')

const createClient = (req, ans) => {
    let client = new Client({
        categoria: req.body.categoria,
        Nombre_Producto: req.body.Nombre_Producto,
        Talla: req.body.Talla,
        Precio: req.body.Precio,
        Stock: req.body.Stock
    })

    client.save((err, cli) => {
        err && ans.status(500).json(err.messaje)
        ans.status(200).json(cli)
    })
}

module.exports = {createClient}