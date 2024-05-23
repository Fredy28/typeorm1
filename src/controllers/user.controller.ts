import { Request, Response } from "express"
import {User} from "../entity/User"

export const getUsers = async (req: Request, res: Response) => {
    try {
        const listaUsers = await User.find()
        return res.json(listaUsers)
    } catch(error) {
        if (error instanceof Error)
        return res.status(500).json({message: error.message})
    }
}

export const createUser = async (req: Request, res: Response) => {
    try {
        console.log(req.body)

        const { nombre, ap_paterno, ap_materno, correo_electronico, contrasenia } = req.body
        const user = new User()
        user.nombre = nombre
        user.ap_paterno = ap_paterno
        user.ap_materno = ap_materno
        user.correo_electronico = correo_electronico
        user.contrasenia = contrasenia

        await user.save()

        return res.json(user)
    } catch (error) {

    }
}