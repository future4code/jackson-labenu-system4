import { connection } from "../index"


export async function sqlDeleteStudent (data: any) {
    const {id} = data

    const sqlRaw = `DELETE FROM STUDENTS WHERE id = "${id}";`

    const result = await connection.raw(sqlRaw)
}
