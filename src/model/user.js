import { createHmac } from "crypto";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    }
})

userSchema.methods = {
    authenticate(password) {
        try {
            return this.password == this.encrytPassword(password)
        } catch (error) {

        }
    },
    encrytPassword(password) {
        if (!password) return
        try {
            return createHmac("sha256", "123456").update(password).digest('hex')
        } catch (error) {
            console.log(error)
        }
    }
}

userSchema.pre('save', function (next) {
    this.password = this.encrytPassword(this.password)
    next()
})

export default mongoose.model('User', userSchema)