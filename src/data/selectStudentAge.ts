import { connection } from "../index"


export async function selectStudentAge (data: any) {
    const {id} = data

    const sqlRaw = `
        SELECT DATEDIFF(CURDATE(), birthdate) / 365 as ageYears
        FROM STUDENTS
        WHERE id = "${id}"
        ;
    `

    let result = await connection.raw(sqlRaw)
    result = result[0][0]
    return result
}
