import { Empleado } from './../entity/Empleado';
import { Request, Response } from "express"

export const getEmpleado = async (req: Request, res: Response) => {
    try {
        const listaEmpleado = await Empleado.find()
        return res.json(listaEmpleado)
    } catch(error) {
        if (error instanceof Error)
        return res.status(500).json({message: error.message})
    }
}

export const createEmpleado = async (req: Request, res: Response) => {
    try {
        console.log(req.body)

        const { nombre, ap_paterno, ap_materno, telefono } = req.body
        const emp = new Empleado()
        emp.nombre = nombre
        emp.ap_paterno = ap_paterno
        emp.ap_materno = ap_materno
        emp.telefono = telefono

        await emp.save()

        return res.json(emp)
    } catch (error) {

    }
}