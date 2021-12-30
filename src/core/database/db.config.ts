import { IDatabaseConfig } from "./database.interface";
import * as dotenv from 'dotenv'

dotenv.config()

export const databaseConfig: IDatabaseConfig = {
  development:{
    dialect: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    autoLoadModels: true,
  },

  test:{
    dialect: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    autoLoadModels: true,
  },

  production:{
    dialect: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    autoLoadModels: true,
  }
}