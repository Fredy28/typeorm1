import { createEdificio, getEdificio } from './../controllers/edificio.controller';
import { Router } from "express";

const router = Router()

//router.get('/users', getUsers)
router.post('/edificio', createEdificio)

router.get('/edificio', getEdificio)

export default router