const express = require('express')
const { getOrder, createOrder, updateOrder, deleteOrder, addProducts  } = require('../controllers/orders.controllers')
const router = express.Router()

router.get('/get', getOrder)

router.post('/post', createOrder)

router.put('/update/:id', updateOrder)

router.delete('/delete/:id', deleteOrder)

router.put('/addproducts/:id', addProducts)

module.exports = router 