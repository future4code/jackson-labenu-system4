import { Request, Response } from "express";
import { filterStudents } from "../data/filterStudents";


export const getStudents = async(req: Request, res: Response) => {
    try {
        const id = req.query.id || req.body.id
        const name = req.query.name || req.body.name
        const email = req.query.email || req.body.email
        let birthdate = req.query.birthdate || req.body.birthdate
        const missionName = req.query.missionName || req.body.missionName
        
        let paramCount: number = 0, param: string
        if (id) {paramCount++, param = `id = ${id}`}
        if (name) {paramCount++, param = `name = ${name}`}
        if (email) {paramCount++, param = `email = ${email}`}
        if (birthdate) {paramCount++, param = `id = ${id}`}
        if (missionName) {paramCount++, param = `id = ${id}`}

        // console.log(`[getStudents]: paramCount =`, paramCount)
        if (paramCount > 1) {throw new Error(`Informar somente um parâmetro por busca`)}

        if (birthdate) {
            const [day, month, year] = birthdate
            birthdate = `${year}-${month}-${day}`
        }

        const data= {id, name, email, birthdate, missionName}
        
        const students = await filterStudents(data)
        if (!students.length) {throw new Error('Nenhum estudante encontrado')}
        // console.log(students)
        
        res.status(200).send(students)
    } catch (error) {
        res.status(400).send({message: `[ERROR]: ${error.message || error.sqlMessage}`})
    }
}
