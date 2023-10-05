import "reflect-metadata"
import { DataSource } from "typeorm"

import { CreateUsersTable1695281639949 } from "./migrations/1695281639949-CreateUsersTable"
import { User } from "../modules/accounts/entities/User"
import { Classroom } from "../modules/classrooms/entities/Classroom"
import { CreateClassroomsTable1695903687240 } from "./migrations/1695903687240-CreateClassroomsTable"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "teammate",
    synchronize: true,
    logging: false,
    entities: [User, Classroom],
    migrations: [CreateUsersTable1695281639949, CreateClassroomsTable1695903687240],
    subscribers: [],
})
