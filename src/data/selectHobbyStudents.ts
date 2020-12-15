import { connection } from "../index"



export async function selectHobbyStudents (data: any) {
    const {name} = data

    const sqlRaw = `
        SELECT s.name
        FROM STUDENTS s
        JOIN STUDENT_HOBBY sh
        ON s.id = sh.student_id
        JOIN HOBBY h
        ON sh.hobby_id = h.id AND h.name = "${name}"
        ;
    `

    const result = await connection.raw(sqlRaw)
    return result[0]
}
