import express from "express";
import { createProduct, deleleProduct, getProduct, getProducts, updateProduct } from "../controllers/product";

const route = express.Router()

route.get("/products", getProducts)
route.get('/products/:id', getProduct)
route.delete('/products/:id', deleleProduct)
route.post('/products', createProduct)
route.put('/products/:id', updateProduct)

export default route