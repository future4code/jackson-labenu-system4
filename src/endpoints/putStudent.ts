import { Request, Response } from "express";
import { insertPerson } from "../data/insertPerson";


export const putStudent = async(req: Request, res: Response): Promise<void> => {
    res.statusCode = 400
    try {
        const person = 'STUDENTS'
        const name = req.query.name || req.body.name
        const email = req.query.email || req.body.email
        let birthdate = req.query.birthdate || req.body.birthdate
        console.log(`[putStudent]: birthdate(1) =`, birthdate)

        if (!name) {throw new Error(`Informe o nome do estudante`)}
        if (!email) {throw new Error(`Informe o email do estudante`)}
        if (!birthdate) {
            throw new Error(`Informe a data do nascimento do estudante no formato "dd/mm/aaaa"`)
        } else {
            const [day, month, year] = birthdate.split('/')
            birthdate = `${year}-${month}-${day}`
        }

        console.log(`[putStudent]: birthdate(2) =`, birthdate)

        const data = {person, name, email, birthdate}

        await insertPerson(data)

        res.status(200).send({message: `Estudante ${name} cadastrado com sucesso!`})
    } catch (error) {
        res.status(res.statusCode).send({error_message: error.sqlMessage || error.message})
    }
}
