const mongoose = require('mongoose');
const Product = require('./Products');

const ordersSchema = mongoose.Schema(
    {
        user_email: {
            type: String,
            required: true            
        },
        products: {
            type: [mongoose.ObjectId],ref: 'Product'
        },
        comments: {
            type: String
        },
        total_price: {
            type: Number,
            required: true
        },
        delivery_method: {
            type: String,
            required: true,
            default: 'home delivery'
        },
        payment_method: {
            type: String,
            required: true,
            default: 'paypal'
        },
        card_number: {
            type: Number
        },
        expiration_date: {
            type: Date
        },
        cvv: {
            type: Number
        }
    },
    {
        timestamps: true
    }
)

const Order = mongoose.model('Order', ordersSchema)

module.exports = Order