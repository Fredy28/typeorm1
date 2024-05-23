import { Edificio } from './../entity/Edificio';
import { Request, Response } from "express"

export const getEdificio = async (req: Request, res: Response) => {
    try {
        const listaEdificio = await Edificio.find()
        return res.json(listaEdificio)
    } catch(error) {
        if (error instanceof Error)
        return res.status(500).json({message: error.message})
    }
}

export const createEdificio = async (req: Request, res: Response) => {
    try {
        console.log(req.body)

        const { nombre, planta, descripcion } = req.body
        const edif = new Edificio()
        edif.nombre = nombre
        edif.planta = planta
        edif.descripcion = descripcion

        await edif.save()

        return res.json(edif)
    } catch (error) {

    }
}