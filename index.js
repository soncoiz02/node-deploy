import cors from 'cors';
import express from "express";
import http from 'http';
import mongoose from "mongoose";

import productRoute from './src/router/product'
import authRoute from './src/router/auth'
import bookRoute from './src/router/book'
import cateRoute from './src/router/cate'
import userRoute from './src/router/user'

import dotenv from 'dotenv'

const app = express()
const server = http.createServer(app)

dotenv.config()
app.use(cors())
app.use(express.json())

app.use('/api', productRoute)
app.use('/api', authRoute)
app.use('/api', bookRoute)
app.use('/api', cateRoute)
app.use('/api', userRoute)

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err))

const port = process.env.PORT || 3001

server.listen(port, () => {
    console.log('Server is running on port 8000')
})