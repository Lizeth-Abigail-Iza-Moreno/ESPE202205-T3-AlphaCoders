//const ProductController = require('../controller/Products')
const PersonController = require('../controller/Persons')
const express = require('express')
const router = express.Router()

//router.metodo_CRUD('uri), controlador.metodo)
//router.post('/addProducto', ProductController.createProducto)
//router.get('/Productos', ProductController.getProductos)
//router.put('/updatePrecio', ProductController.updatePrecio)
//router.delete('/deleteProducto', ProductController.deleteProducto)

router.post('/addPersonas', PersonController.createPersona)
router.get('/Personas', PersonController.getPersonas)
router.put('/updateEmail', PersonController.updateemail)
router.delete('/deletePersona', PersonController.deletePersona)

module.exports = router