import { Vale } from './../entity/Vale';
import { Request, Response } from "express"

export const getVale = async (req: Request, res: Response) => {
    try {
        const listaVale = await Vale.find()
        return res.json(listaVale)
    } catch(error) {
        if (error instanceof Error)
        return res.status(500).json({message: error.message})
    }
}

export const createVale = async (req: Request, res: Response) => {
    try {
        console.log(req.body)

        const { nim_serie, unidad, modelo, marca } = req.body
        const vale = new Vale()
        vale.nim_serie = nim_serie
        vale.unidad = unidad
        vale.modelo = modelo
        vale.marca = marca

        await vale.save()

        return res.json(Vale)
    } catch (error) {

    }
}