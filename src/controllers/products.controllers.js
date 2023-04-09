const Product = require('../models/Products')

const getProduct = async (req,res) => {
    try {
        const category = req.query.category
        let products
        if(category){
            products = await Product.find({category})
        } else {
            products = await Product.find({})
        }

        res.json({ products })
    } catch(error) {
        res.status(500).json({
            msg:'Error al obtener los datos'
        })
    }
}

const createProduct = async (req,res) => {
    const { name, description, price, image } = req.body
    try {
        const newProduct = await Product.create({
            name,
            description,
            price,
            image
        })
        
    } catch(error) {
        return res.status(400).json({
            msg: error
        })

    }
}

const updateProduct = async (req,res) => {
    const { name, description, price, image } = req.body
    const { id } = req.params

    try {
        const updateProduct = await Product.findByIdAndUpdate(id, { name, description, price, image }, { new: true })
        res.json(updateProduct)
    } catch(error) {
        res.status(500).json({
            msg: 'Error actualizando el producto'
        })

    }
}

const deleteProduct = async (req,res) => {
    const { id } = req.params;

    try {
        const deleteProduct = await Product.findByIdAndRemove({ _id:id });
        res.json(deleteProduct);

    } catch (error) {
        res.status(500).json({
            msg:'Error al borrar el producto'
        })
    }
}

module.exports = {
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct    
}