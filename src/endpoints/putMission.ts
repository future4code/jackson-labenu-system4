import { Request, Response } from "express";
import { insertMission } from "../data/insertMission";


export const putMission = async(req: Request, res: Response): Promise<void> => {
    res.statusCode = 400
    try {
        const name: string = req.query.name || req.body.name
        const start_date: string = req.query.start_date || req.body.start_date
        const end_date: string = req.query.end_date || req.body.end_date
        const module: number = Number(req.query.module) || req.body.module

        console.log(`[putMission]:`, name, start_date, end_date, module)

        if (!name) {throw new Error(`Informe o nome da missão`)}
        if (!start_date) {throw new Error(`Informa a data de início da missão`)}
        if (!end_date) {throw new Error(`Informe a data de término da missão`)}
        if (!module || isNaN(module)) {throw new Error(`Informe o número do módulo da missão`)}

        const data = {name, start_date, end_date, module}

        await insertMission(data)

        res.status(200).send({message: `Missão ${name} cadastrada com sucesso!`})
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
