import { connection } from "../index"


export async function insertMission(data: any){
    const {name, start_date, end_date, module} = data
    const id = new Date().getTime()

    const sqlRaw = `
        INSERT INTO MISSIONS (id, name, start_date, end_date, module)
        VALUES (
            "${id}",
            "${name}",
            "${start_date}",
            "${end_date}",
            ${module}
        )
        ;
    `

    const result = await connection.raw(sqlRaw)
}
