export type Student = {
    id: string,
    name: string,
    email: string,
    birthdate: string,
    hobbies: string[]
}

export type Teacher = {
    id: string,
    name: string,
    email: string,
    birthdate: string,
    specialties: string[]
}

export type Mission = {
    id: string,
    name: string,
    start_date: string,
    end_date: string,
    module: number | undefined
}

export type inputData = {
    id: string | undefined,
    name: string | undefined,
    email: string | undefined,
    birthdate: string | undefined,
    mission: string | undefined,
}