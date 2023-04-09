const express = require('express')
const { getAddress, createAddress, updateAddress, deleteAddress  } = require('../controllers/address.controllers')
const router = express.Router()

router.get('/get', getAddress)

router.post('/post', createAddress)

router.put('/update/:id', updateAddress)

router.delete('/delete/:id', deleteAddress)

module.exports = router 