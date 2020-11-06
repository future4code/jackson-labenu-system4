import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import {AddressInfo} from 'net'
import dotenv from 'dotenv'
import knex from 'knex'
import { getStudents } from './endpoints/getStudents'
import { putStudent } from './endpoints/putStudent'
import { putTeacher } from './endpoints/putTeacher'
import { putMission } from './endpoints/putMission'
import { putStudentMission } from './endpoints/putStudentMission'
import { putTeacherMission } from './endpoints/putTeacherMission'
import { getStudentAge } from './endpoints/getStudentAge'
import { postHobby } from './endpoints/postHobby'
import { postStudentHobby } from './endpoints/postStudentHobby'
import { getHobbyStudents } from './endpoints/getHobbyStudents'
import { deleteStudent } from './endpoints/deleteStudent'


//-------------- Configuração do knex ------------------------
    dotenv.config()

    export const connection = knex({
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        }
    })
//------------------------------------------------------------


//-------------- Configuração do express ---------------------
    const app: Express = express()
    app.use(express.json())
    app.use(cors())
//------------------------------------------------------------


app.get('/students/search', getStudents)            //  exibe todos os estudantes dentro dos parâmetros de busca (id, name, email, birthdate, missionName)

app.put('/students/add', putStudent)                //  cadastrar estudante

app.put('/teachers/add', putTeacher)                //  cadastrar professor

app.put('/missions/add', putMission)                //  cadastrar missão

app.put('/students/addMission', putStudentMission)  //  cadastrar/mudar/remover aluno de uma missão

app.put('/teachers/addMission', putTeacherMission)  //  cadastrar/mudar/remover professor de uma missão

app.get('/students/age', getStudentAge)             //  pegar idade em anos do aluno

app.post('/hobby/add', postHobby)                   //  cadastrar novo hobby

app.post('/students/hobby', postStudentHobby)       //  adicionar um hobby à um estudante

app.get('/students_hobby/search', getHobbyStudents) //  exibe estudantes que possuem o mesmo hobby

app.delete('/students/delete', deleteStudent)       //  deletar estudante


//-------------- Configuração do servidor --------------------
    const server = app.listen(process.env.PORT || 3003, () => {
        if (server) {
            const address = server.address() as AddressInfo
            console.log(`Server is running in http://localhost:${address.port}`)
        } else {
            console.error(`Failure upon starting server`)
        }
    })
//------------------------------------------------------------

