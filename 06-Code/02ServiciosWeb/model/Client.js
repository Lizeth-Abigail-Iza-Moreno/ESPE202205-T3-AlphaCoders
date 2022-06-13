const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClientSchema = new Schema({
    categoria: {type: String},
    Nombre_Producto: {type: String},
    Talla: {type: Number},
    Precio: {type: Number},
    Stock: {type: Number}
}, {
    versionKey: false
})

module.exports = Client = mongoose.model('Client', ClientSchema)