import express from "express";
import { createBook, deleteBook, getBook, getBooks, updateBook, updateBookStatus } from "../controllers/book";

const route = express.Router();

route.get('/book', getBooks)
route.get('/book/:id', getBook)
route.post('/book', createBook)
route.put('/book/:id', updateBook)
route.delete('/book/:id', deleteBook)
route.patch('/book/:id', updateBookStatus)

export default route;