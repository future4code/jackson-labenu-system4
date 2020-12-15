import { Request, Response } from "express";
import { selectStudentAge } from "../data/selectStudentAge";
import { getStudents } from "./getStudents";



export const getStudentAge = async(req: Request, res: Response) => {
    try {
        const data = {id: req.query.id || req.body.id}
        const age = await selectStudentAge(data)
        console.log(`[getStudentAge]:`, age)
        res.status(200).send(age)
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
