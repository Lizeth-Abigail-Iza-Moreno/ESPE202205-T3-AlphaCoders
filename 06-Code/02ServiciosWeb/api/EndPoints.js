const ClientController = require('../controller/Clients')
const express = require('express')
const router = express.Router()

//router.metodo_CRUD('uri), controlador.metodo)
router.post('/addProduct', ClientController.createProduct)
router.get('/products', ClientController.getProducts)
router.put('/updatePrecio', ClientController.updatePrecio)
router.delete('/deleteProduct', ClientController.deleteProduct)

module.exports = router