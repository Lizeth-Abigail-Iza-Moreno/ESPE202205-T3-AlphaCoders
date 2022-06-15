const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    categoria: {type: String},
    Nombre_Producto: {type: String},
    Talla: {type: Number},
    Precio: {type: Number},
    Stock: {type: Number}
}, {
    versionKey: false
})

module.exports = Productos = mongoose.model('Productos', ProductSchema)