const Person = require('../model/Person')
const createPersona = (req, res) => {
    let person = new Person({
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        Tipo_Usuario: req.body.Tipo_Usuario,
        email: req.body.email,
        contrasena:req.body.contrasena
    })

    person.save((err, per) => {
        err && res.status(500).json(err.messaje)
        res.status(200).json(per)
    })
}

const getPersonas = (req, res) => {
    Person.find((err, persons) => {
        err && res.status(500).send(err.message)
        res.status(200).json(persons)
    })
}

const updateemail = (req, res) => {
    try {
        Person.findOneAndUpdate({cedula: req.body.cedula}, {email: req.body.email}, (err, per) => {
            err && res.status(500).send(err.message)
            res.status(200).send(per)
        })
    }catch(error) {
        res.status(404).send({error: "Usuario no encontrado"})
    }
}

const deletePersona = (req, res) => {
    Person.findOneAndDelete({cedula: req.body.cedula}, (err, per) => {
        err && res.status(501).send(err.message)
        res.status(200).send(per)
    })
}
module.exports = {createPersona, getPersonas, updateemail, deletePersona}