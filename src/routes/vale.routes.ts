import { createVale, getVale } from './../controllers/vale.controller';
import { Router } from "express";

const router = Router()

//router.get('/users', getUsers)
router.post('/vale', createVale)

router.get('/vale', getVale)

export default router