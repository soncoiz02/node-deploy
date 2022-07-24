import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    salePrice: {
        type: Number,
        default: 0
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 1
    },
    cateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cate"
    }
})

export default mongoose.model("Book", bookSchema)