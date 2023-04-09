const Order = require('../models/Orders')

const getOrder = async (req,res) => {
    try {
        const user_email = req.query.user_email
        let orders = []
        if(user_email){
            orders = await Order.find({user_email})
        } 

        res.json({ orders })
    } catch(error) {
        res.status(500).json({
            msg:'Error al obtener los datos'
        })
    }
}

const createOrder = async (req,res) => {
    const { user_email, products, comments, total_price, delivery_method, payment_method } = req.body
    try {
        const newOrder = await Order.create({
            user_email, 
            products, 
            comments,
            total_price, 
            delivery_method, 
            payment_method
        })

        res.json({ newOrder })
        
    } catch(error) {
        return res.status(400).json({
            msg: error
        })

    }
}

const updateOrder = async (req,res) => {
    const { user_email, products, comments, total_price, delivery_method, payment_method } = req.body
    const { id } = req.params;
    try {
        const updateOrder = await Order.findByIdAndUpdate(id, { user_email, products, comments, total_price, delivery_method, payment_method }, { new: true })
        res.json(updateOrder)
    } catch(error) {
        res.status(500).json({
            msg: 'Error actualizando la orden'
        })

    }
}

const deleteOrder = async (req,res) => {
    const { id } = req.params;

    try {
        const deleteOrder = await Order.findByIdAndRemove({ _id:id });
        res.json(deleteOrder);

    } catch (error) {
        res.status(500).json({
            msg:'Error al borrar la orden'
        })
    }
}

const addProducts = async (req,res) => {
    const { id } = req.params;  
    const {products} = req.body;

    try {
        const saveProducts = await Order.findByIdAndUpdate(id, {$push: {products:products}});
        res.json(saveProducts);

    } catch (error) {        
        res.status(500).json({
            msg:'Error al actualizar la orden'
        })
    }
}

module.exports = {
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder,
    addProducts
}