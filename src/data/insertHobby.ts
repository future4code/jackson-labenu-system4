import { connection } from "../index"


export async function insertHobby (data: any) {
    const {name} = data
    const id = new Date().getTime()

    const sqlRaw = `
        INSERT INTO HOBBY (id, name)
        VALUES (
            "${id}",
            "${name}"
        )
        ;
    `
        
    const result = await connection.raw(sqlRaw)
}
