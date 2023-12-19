import { Router } from "express"
import path from "path"
import Controller from "../controller/controller.js"

const __dirname = path.resolve(path.dirname(''))
const router = Router()

router
	.post("/add", Controller.addItem)
	.get('/users', Controller.getUsers)

export default router
