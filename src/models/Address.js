const mongoose = require('mongoose');

const addressSchema = mongoose.Schema(
    {
        user_email: {
            type: String,
            required: true            
        },
        street: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        neighborhood: {
            type: String,
            required: true
        },
        reference: {
            type: String,
            required: true
        },
        isDefault: {
            type: Boolean, 
            default: false
        }        
    },
    {
        timestamps: true
    }
)

const Address = mongoose.model('Address', addressSchema)

module.exports = Address