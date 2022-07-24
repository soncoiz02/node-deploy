import User from '../model/user'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    const { email, password, name } = req.body
    try {
        const existUser = await User.findOne({ email }).exec()
        if (existUser) {
            return res.json({
                message: "User has already exist"
            })
        }
        const user = await User({ email, name, password }).save()
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email }).exec()
        if (!user) {
            return res.json({ message: "User not exist" })
        }
        if (!user.authenticate(password)) {
            return res.json({ message: "Wrong password" })
        }
        const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: 60 * 60 })
        res.json({
            accessToken: token,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        })
    } catch (error) {
        console.log(error)
    }
}