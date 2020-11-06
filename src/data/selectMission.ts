import { connection } from "../index"
import { Mission } from "../types/types"


export async function selectMission (data: any) {
    const {name} = data
    
    const sqlRaw = `SELECT * FROM MISSIONS WHERE name = "${name}";`
    const result = await connection.raw(sqlRaw)

    return result
}

