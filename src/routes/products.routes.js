const express = require('express')
const { getProduct, createProduct, updateProduct, deleteProduct  } = require('../controllers/products.controllers')
const router = express.Router()

router.get('/get', getProduct)

router.post('/post',createProduct)

router.put('/update/:id',updateProduct)

router.delete('/delete/:id',deleteProduct)

module.exports = router 