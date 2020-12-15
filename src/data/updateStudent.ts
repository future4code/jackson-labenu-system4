import { connection } from "../index"


export async function updateStudent (data: any): Promise<void> {
    const table = 'STUDENTS'
    const {studentEmail, mission} = data
    const missionID = mission.id
    const missionName = mission.name

    const sqlRaw = `
        UPDATE ${table}
        SET mission_id = "${missionID}",
            mission_name = "${missionName}"
        WHERE email = "${studentEmail}"
        ;
    `

    const result = await connection.raw(sqlRaw)
}
