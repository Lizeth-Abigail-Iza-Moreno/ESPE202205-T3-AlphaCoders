const ClientController = require('../controller/Clients')
const express = require('express')
const router = express.Router()

//router.metodo_CRUD('uri), controlador.metodo)
router.post('/add', ClientController.createClient)

module.exports = router