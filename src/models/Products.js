const mongoose = require('mongoose');

const productsSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true,
            enum:['Entradas','Hambruguesas','Boneless, alitas y camarones','Tacos','Bebidas']
        },
        description: {
            type: String            
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', productsSchema)

module.exports = Product