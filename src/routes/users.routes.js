const express = require('express')
const { getUser, createUser, updateUser, loginUser, verifyUser } = require('../controllers/users.controllers')
const router = express.Router()
const auth = require('../middlewares/auth')

router.get('/get', auth, getUser)

router.post('/post',createUser)

router.put('/update/:id',updateUser)

router.post('/login',loginUser)

router.post('/verify',verifyUser)

module.exports = router 

