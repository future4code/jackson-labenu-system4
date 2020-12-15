import { connection } from "../index"

export async function insertPerson(data: any): Promise<void>{
    let {person, name, email, birthdate} = data
    const id = new Date().getTime()

    const sqlRaw = `
        INSERT INTO ${person.toUpperCase()} (id, name, email, birthdate)
        VALUES (
            "${id}",
            "${name}",
            "${email}",
            "${birthdate}"
        )
        ;
    `
    const result = await connection.raw(sqlRaw)
}
