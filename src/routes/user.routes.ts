import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.controller"

const router = Router()

//router.get('/users', getUsers)
router.post('/user', createUser)

router.get('/user', getUsers)

export default router