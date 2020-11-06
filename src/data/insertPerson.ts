import { connection } from "../index"

export async function insertPerson(data: any): Promise<void>{
    let {person, name, email, birthdate} = data
    console.log(`[insertPerson]: birthdate(1) =`, birthdate)
    const id = new Date().getTime()
    console.log(`[insertPerson]: birthdate(2) =`, birthdate)

    console.log(`[insertPerson]:`, person, id, name, email, birthdate)

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
    // console.log(result)
}
