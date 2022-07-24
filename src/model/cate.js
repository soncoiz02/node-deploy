import mongoose from "mongoose";

const cateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 1
    }
})

export default mongoose.model("Cate", cateSchema)