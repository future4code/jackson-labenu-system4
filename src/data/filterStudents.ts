import { connection } from ".."



export async function filterStudents (data: any) {
    let {id, name, email, birthdate, missionName} = data
    // console.log(`[filterStudents]:`, id, name, email, birthdate, missionName)

    let sqlWhere: string
    if (id) {
        sqlWhere = `WHERE id = "${id}"`
    } else if (name) {
        sqlWhere = `WHERE name = "${name}"`
    } else if (email) {
        sqlWhere = `WHERE email = "${email}"`
    } else if (birthdate) {
        sqlWhere = `WHERE birthdate = "${birthdate}"`
    } else if (missionName) {
        sqlWhere = `WHERE mission_name = "${missionName}"`
    } else {
        sqlWhere = ''
    }

    const sqlRaw = `
        SELECT * FROM STUDENTS
        ${sqlWhere}
        ;
    `

    let result = await connection.raw(sqlRaw)
    result = result[0]
    return result
}
