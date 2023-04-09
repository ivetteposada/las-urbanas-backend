const mongoose = require('mongoose');

const usersSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true,'El email es requerido'],
            unique: true
        },
        password: {
            type: String,
            required: [true,'La contraseña es requerido']
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', usersSchema)

module.exports = User;