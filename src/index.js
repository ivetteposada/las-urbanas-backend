const express = require('express')
const app = express()
const userRoutes = require('./routes/users.routes')
const productRoutes = require('./routes/products.routes')
const orderRoutes = require('./routes/orders.routes')
const addressRoutes = require('./routes/address.routes')
const cors = require('cors')
const connectDB = require('./config/db')

require('dotenv').config()
connectDB()

app.use(cors())
app.use(express.json())

app.use('/user', userRoutes)
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)
app.use('/address', addressRoutes)

app.listen(process.env.PORT, () => {
	
})


