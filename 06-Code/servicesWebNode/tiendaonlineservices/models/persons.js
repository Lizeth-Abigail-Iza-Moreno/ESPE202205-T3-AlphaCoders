const mongoose = require("mongoose");

const personsSchema = new mongoose.Schema(
    {
        id: { type: Number },
        cedula: { type: Number },
        nombre: { type: String },
        apellido: { type: String },
        Tipo_Usuario: { type: String },
        usuario: { type: String },
        contrasena: { type: String },
        email: { type: String},
    },
    {
        collection: "persons",
        versionKey: false
    }

);
module.exports = mongoose.model("persons", personsSchema);