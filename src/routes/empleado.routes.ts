import { createEmpleado, getEmpleado } from './../controllers/empleado.controller';
import { Router } from "express";

const router = Router()

//router.get('/users', getUsers)
router.post('/empleado', createEmpleado)

router.get('/empleado', getEmpleado)

export default router