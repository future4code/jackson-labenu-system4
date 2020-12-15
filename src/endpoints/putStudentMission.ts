import { Request, Response } from "express";
import { selectMission } from "../data/selectMission";
import { updateStudent } from "../data/updateStudent";




export const putStudentMission = async(req: Request, res: Response): Promise<void> => {
    try {
        const studentEmail = req.query.studentEmail || req.body.studentEmail
        const missionName = req.query.missionName || req.body.missionName

        if (!studentEmail) {throw new Error(`Informe o email do estudante`)}
        if (!missionName) {throw new Error(`Informe o nome da missão`)}

        let mission = await selectMission({name: missionName})

        if (!mission[0].length) {throw new Error(`Missão ${missionName} não encontrada`)}

        mission = mission[0][0]

        const data = {studentEmail, mission}

        await updateStudent(data)

        res.status(200).send({message: `Estudante ${studentEmail} cadastrado na missão ${missionName} com sucesso`})
    } catch (error) {
        res.status(res.statusCode).send({message:`[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
