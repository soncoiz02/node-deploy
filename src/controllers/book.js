import Book from '../model/book'

export const getBooks = async (req, res) => {
    try {
        const cate = req.query.cate
        if (cate) {
            const books = await Book.find({ cateId: cate }).exec()
            res.json(books)
        }
        else {
            const books = await Book.find({}).populate('cateId').exec()
            res.json(books)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).populate('cateId').exec()
        res.json(book)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createBook = async (req, res) => {
    try {
        const book = await Book(req.body).save()
        res.json(book)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec()
        res.json(book)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id).exec()
        res.json(book)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateBookStatus = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true }).exec()
        res.json(book)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}