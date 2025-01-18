import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import mysql2 from "mysql2";

const isProduction = process.env.NODE_ENV === 'production';

dotenv.config();

const connection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: 'mysql',
      dialectModule: mysql2,
      timezone: '-03:00',
      dialectOptions: isProduction
        ? {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          }
        : {}, // Não usar SSL no desenvolvimento
    }
);

export default connection;



// const connection = new Sequelize('DB-BlogExpress', 'root', 'L1nux2906*', {
//     host: 'localhost',
//     dialect: 'mysql',
//     timezone: '-03:00'
// });

// export default connection;
