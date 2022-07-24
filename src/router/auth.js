import express from "express";
import { login, register } from "../controllers/auth";

const route = express.Router()

route.post("/auth/login", login)
route.post("/auth/register", register)

export default route