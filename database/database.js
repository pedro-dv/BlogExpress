import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    timezone: '-03:00',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

export default connection;



// const connection = new Sequelize('DB-BlogExpress', 'root', 'L1nux2906*', {
//     host: 'localhost',
//     dialect: 'mysql',
//     timezone: '-03:00'
// });

// export default connection;
