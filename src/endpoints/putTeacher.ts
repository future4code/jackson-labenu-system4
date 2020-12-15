import { Request, Response } from "express";
import { insertPerson } from "../data/insertPerson";




export const putTeacher = async(req: Request, res: Response): Promise<void> => {
    res.statusCode = 400
    try {
        const person = 'TEACHERS'
        const name = req.query.name || req.body.name
        const email= req.query.email || req.body.name
        let birthdate = req.query.birthdate || req.body.birthdate

        if (!name) {res.statusCode = 400; throw new Error(`Informe o nome do professor`)}
        if (!email) {res.statusCode = 400; throw new Error(`Informe o email do professor`)}
        if (!birthdate) {
            res.statusCode = 400; throw new Error(`Informe a data do nascimento do professor no formato "dd/mm/aaaa"`)
        } else {
            const [day, month, year] = birthdate.split('/')
            birthdate = `${year}-${month}-${day}`
        }
        
        const data = {person, name, email, birthdate}

        await insertPerson(data)

        res.status(200).send({message: `Professor ${name} cadastrado com sucesso!`})
    } catch (error) {
        res.status(res.statusCode).send({message: error.sqlMessage || error.message})
    }
}
