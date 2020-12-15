import { Request, Response } from "express";
import { selectMission } from "../data/selectMission";
import { updateTeacher } from "../data/updateTeacher";


export const putTeacherMission = async(req: Request, res: Response): Promise<void> => {
    try {
        const teacherEmail = req.query.teacherEmail || req.body.teacherEmail
        const missionName = req.query.missionName || req.body.missionName

        if (!teacherEmail) {throw new Error(`Informe o email do professor`)}
        if (!missionName) {throw new Error(`Informe o nome da missão`)}

        let mission = await selectMission({name: missionName})

        if (!mission[0].length) {throw new Error(`Missão ${missionName} não encontrada`)}

        mission = mission[0][0]

        const data = {teacherEmail, mission}

        await updateTeacher(data)

        res.status(200).send({message: `Professor ${teacherEmail} cadastrado na missão ${missionName} com sucesso`})
    } catch (error) {
        res.status(res.statusCode).send({message:`[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
