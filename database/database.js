import { Sequelize } from "sequelize";

const connection = new Sequelize('DB-BlogExpress', 'root', 'L1nux2906*', {
    host: 'localhost',
    dialect: 'mysql'
});

export default connection;
