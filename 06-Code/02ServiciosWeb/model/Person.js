const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PersonSchema = new Schema({
    cedula: {type: String},
    nombre: {type: String},
    apellido: {type: String},
    Tipo_Usuario: {type: String},
    email: {type: String},
    contrasena:{type:String}
}, {
    versionKey: false
})

module.exports = Persons = mongoose.model('Persons', PersonSchema)