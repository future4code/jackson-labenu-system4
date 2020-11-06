import { Request, Response } from "express";
import { sqlDeleteStudent } from "../data/sqlDeleteStudent";



export const deleteStudent = async(req: Request, res: Response): Promise<void> => {
    try {
        const id = req.query.id || req.body.id
        if (!id) {throw new Error(`Informe o ID do estudante a ser removido`)}

        const data = {id}

        await sqlDeleteStudent(data)

        res.status(200).send({message: `[SUCESS]: Estudante removido com sucesso!`})
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
