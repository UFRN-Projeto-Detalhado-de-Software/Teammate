import "reflect-metadata"
import { DataSource } from "typeorm"

import { CreateUsersTable1695281639949 } from "./migrations/1695281639949-CreateUsersTable"
import { User } from "../modules/accounts/entities/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "teammate",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [CreateUsersTable1695281639949],
    subscribers: [],
})
