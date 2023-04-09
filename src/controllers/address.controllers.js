const Address = require('../models/Address')

const getAddress = async (req,res) => {
    try {
        const user_email = req.query.user_email
        let add = []
        if(user_email){
            add = await Address.find({user_email})
        } 

        res.json({ add })
    } catch(error) {
        res.status(500).json({
            msg:'Error al obtener los datos'
        })
    }
}

const createAddress = async (req,res) => {
    const { user_email, street, number, neighborhood, reference } = req.body
    try {
        const newAddress = await Address.create({
            user_email, 
            street, 
            number, 
            neighborhood, 
            reference
        })
        res.json(newAddress)
        
    } catch(error) {
        return res.status(400).json({
            msg: error
        })

    }
}

const updateAddress = async (req,res) => {
    const { user_email, street, number, neighborhood, reference, isDefault } = req.body
    const { id } = req.params
    try {
        const updateAddress = await Address.findByIdAndUpdate(id, { user_email, street, number, neighborhood, reference, isDefault }, { new: true })
        res.json(updateAddress)
    } catch(error) {
        res.status(500).json({
            msg: 'Error actualizando la direccion'
        })

    }
}

const deleteAddress = async (req,res) => {
    const { id } = req.params;

    try {
        const deleteAddress = await Address.findByIdAndRemove({ _id:id });
        res.json(deleteAddress);

    } catch (error) {
        res.status(500).json({
            msg:'Error al borrar la orden'
        })
    }
}

module.exports = {
    getAddress,
    createAddress,
    updateAddress,
    deleteAddress
}