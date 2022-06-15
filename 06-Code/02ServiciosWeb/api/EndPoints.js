const ProductController = require('../controller/Products')
const express = require('express')
const router = express.Router()

//router.metodo_CRUD('uri), controlador.metodo)
router.post('/addProducto', ProductController.createProducto)
router.get('/Productos', ProductController.getProductos)
router.put('/updatePrecio', ProductController.updatePrecio)
router.delete('/deleteProducto', ProductController.deleteProducto)

module.exports = router