import { connection } from "../index"


export async function insertStudentHobby(data: any) {
    const {studentID, hobbyID} = data
    const id = studentID + '_' + hobbyID

    const sqlRaw = `
        INSERT INTO STUDENT_HOBBY (id, student_id, hobby_id)
        VALUES (
            "${id}",
            "${studentID}",
            "${hobbyID}"
        )
        ;
    `

    const result = await connection.raw(sqlRaw)
}
