import { Area } from './../entity/Area';
import { Request, Response } from "express"

export const getArea = async (req: Request, res: Response) => {
    try {
        const listaArea = await Area.find()
        return res.json(listaArea)
    } catch(error) {
        if (error instanceof Error)
        return res.status(500).json({message: error.message})
    }
}

export const createArea = async (req: Request, res: Response) => {
    try {
        console.log(req.body)

        const { nombre, descripcion } = req.body
        const area = new Area()
        area.nombre = nombre
        area.descripcion = descripcion

        await area.save()

        return res.json(area)
    } catch (error) {

    }
}