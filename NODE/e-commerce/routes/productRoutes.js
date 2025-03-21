const {getProducts,getProductWithId, addProduct, deleteProduct} = require('../controllers/productControllers')
const express = require('express')
const ProductRouter = express.Router()

ProductRouter.get('/',getProducts)
ProductRouter.get('/:id',getProductWithId)

ProductRouter.post('/',addProduct)
ProductRouter.delete('/:id', deleteProduct)

module.exports ={
    ProductRouter
}