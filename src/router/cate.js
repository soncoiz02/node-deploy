import express from "express";
import { createCate, deleteCate, getCate, getCates, updateCate, updateCateStatus } from "../controllers/cate";

const route = express.Router();

route.get('/cate', getCates)
route.get('/cate/:id', getCate)
route.post('/cate', createCate)
route.put('/cate/:id', updateCate)
route.delete('/cate/:id', deleteCate)
route.patch('/cate/:id', updateCateStatus)

export default route
