import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user";

const route = express.Router();

route.get("/user", getUsers)
route.get('/user/:id', getUser)
route.delete('/user/:id', deleteUser)
route.put('/user/:id', updateUser)

export default route