import { createArea, getArea } from './../controllers/Area.controller';
import { Router } from "express";

const router = Router()

//router.get('/users', getUsers)
router.post('/area', createArea)

router.get('/area', getArea)

export default router