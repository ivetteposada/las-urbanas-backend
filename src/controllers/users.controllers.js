const User = require('../models/Users')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')


const getUser = async (req,res) => {
    try {
        const users = await User.find({})
        res.json({ users })
    } catch(error) {
        res.status(500).json({
            msg:'Error al obtener los datos'
        })
    }
}

const createUser = async (req,res) => {
    const { username, email, password } = req.body
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password,salt)

    try {

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        })

        const payload = {
            user: {
                id: newUser._id
            }
        }

        jwt.sign(
            payload,
            process.env.SECRET,
            {
                expiresIn: 360000
            },
            (error,token) => {
                if(error) throw error
                res.json({ token })
            }
        )
    } catch(error) {
        return res.status(400).json({
            msg: error
        })

    }
}

const loginUser = async (req,res) => {
    const { email,password } = req.body

    try {

        let foundUser = await User.findOne ({ email:email })
        if(!foundUser) {
            return res.status(400).json({
                msg: 'El usuario no existe'
            })
        }

        const passRight = await bcryptjs.compare(password,foundUser.password)
        if(!passRight) {
            return await res.status(400).json({
                msg: 'La contraseña no es correcta'
            })
        }

        const payload = {
            user: {
                id: foundUser.id
            }
        }

        if(email && passRight) {
            jwt.sign(
                payload,
                process.env.SECRET,
                { expiresIn: 360000 },
                (error,token) => {
                  if(error) throw error
                  res.json({token})
                }
            )
        } else {
            res.json({
                msg: error
            })
        }
    } catch (error) {
        res.json({
            msg: error
        })

    }
}

const verifyUser = async (req,res) => {
    try {
        const user = await User.findById(req.user.ide).select('-password')
        res.json({ user })
    } catch (error) {
        res.status(500).json({
            msg: error
        })
    }
}

const updateUser = async (req,res) => {
    const { username, email } = req.body
    const { id } = req.params

    try {
        const updateUser = await User.findByIdAndUpdate(id, { username, email }, { new: true })
        res.json(updateUser)
    } catch(error) {
        res.status(500).json({
            msg: 'Error actualizando el usuario'
        })

    }
}

module.exports = {
    getUser,
    createUser,
    updateUser,
    loginUser,
    verifyUser
}