import book from '../model/book'
import Cate from '../model/cate'

export const getCates = async (req, res) => {
    try {
        const cates = await Cate.find({}).exec()
        res.json(cates)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getCate = async (req, res) => {
    try {
        const cate = await Cate.findById(req.params.id).exec()
        res.json(cate)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createCate = async (req, res) => {
    try {
        const cate = await Cate(req.body).save()
        res.json(cate)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateCate = async (req, res) => {
    try {
        const cate = await Cate.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec()
        res.json(cate)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteCate = async (req, res) => {
    try {
        await book.deleteMany({ cateId: req.params.id })
        const cate = await Cate.findByIdAndDelete(req.params.id).exec()
        res.json(cate)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateCateStatus = async (req, res) => {
    try {
        const cate = await Cate.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true }).exec()
        res.json(cate)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}