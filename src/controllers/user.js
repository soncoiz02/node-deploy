import User from '../model/user'

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({}).exec()
        res.json(users.map(user => {
            return {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        }))
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).exec()
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id).exec()
        res.json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec()
        res.json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}