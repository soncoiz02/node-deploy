import Products from "../model/products"

export const getProducts = async (req, res) => {
    try {
        const products = await Products.find({})
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getProduct = async (req, res) => {
    try {
        const product = await Products.findById(req.params.id)
        res.json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleleProduct = async (req, res) => {
    try {
        const product = await Products.findByIdAndDelete(req.params.id)
        res.json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createProduct = async (req, res) => {
    const product = new Products(req.body)
    try {
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const product = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}