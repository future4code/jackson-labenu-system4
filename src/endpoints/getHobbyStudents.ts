import { Request, Response } from "express";
import { selectHobbyStudents } from "../data/selectHobbyStudents";



export const getHobbyStudents = async(req: Request, res: Response): Promise<void> => {
    try {
        const name = req.query.name || req.body.name
        if (!name) {throw new Error(`Informe o nome do hobby a ser consultado`)}

        const data = {name}

        const students = await selectHobbyStudents(data)
        
        res.status(200).send(students)
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
