import { Request, Response } from "express";
import { insertStudentHobby } from "../data/insertStudentHobby";



export const postStudentHobby = async(req: Request, res: Response): Promise<void> => {
    try {
        const studentID = req.query.studentID || req.body.studentID
        const hobbyID = req.query.hobbyID || req.body.hobbyID

        if (!studentID) {throw new Error(`Informe o ID do estudante`)}
        if (!hobbyID) {throw new Error(`Informe o ID do hobby`)}

        const data = {studentID, hobbyID}

        await insertStudentHobby(data)

        res.status(200).send({message: `[SUCESS]: Hobby adicionado com sucesso!`})
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
