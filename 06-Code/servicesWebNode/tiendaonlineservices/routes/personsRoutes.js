const express = require("express");
const person = require("../models/persons");
const router = express.Router();

//Get all Products
router.get("/persons", async (req, res) => {
    try {
        const persons = await person.find();
        res.json(persons)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Get product by productId

router.get('/person/:id', async (req, res) => {
    try {
        const personObject = await person.findOne({ id: req.params.id })
        if (personObject == null) {
            res.status(400).json(404);
        } else {
            res.json(personObject);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// post Create/Insert one product
router.post('/person', async (req, res) => {
    const personObject = new person({
        id: req.body.id,
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        Tipo_Usuario: req.body.Tipo_Usuario,
        usuario: req.body.usuario,
        contrasena: req.body.contrasena,
        email: req.body.email,
    });

    try {
        const personToSave = await personObject.save();
        res.status(200).json(personToSave);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;