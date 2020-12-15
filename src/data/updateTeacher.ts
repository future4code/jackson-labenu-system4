import { connection } from "../index"


export async function updateTeacher (data: any): Promise<void> {
    const table = 'TEACHERS'
    const {teacherEmail, mission} = data
    const missionID = mission.id
    const missionName = mission.name

    const sqlRaw = `
        UPDATE ${table}
        SET mission_id = "${missionID}",
            mission_name = "${missionName}"
        WHERE email = "${teacherEmail}"
        ;
    `

    const result = await connection.raw(sqlRaw)
}
