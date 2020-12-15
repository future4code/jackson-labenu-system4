import { Request, Response } from "express";
import { insertHobby } from "../data/insertHobby";



export const postHobby = async(req: Request, res: Response): Promise<void> => {
    try {
        const name = req.query.name || req.body.name
        if (!name) {throw new Error(`Informe o nome do hobby`)}

        const data = {name}

        await insertHobby(data)
        
        res.status(200).send({message: `[SUCESS]: Hobby ${name} cadastrado com sucesso`})
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
