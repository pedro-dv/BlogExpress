import { Sequelize } from "sequelize";
import connection from "../database/database.js";

const Category = connection.define('categories', {      // nome da tabela
    title: {
        type: Sequelize.STRING,
        allowNull: false     // não nulos para o titulo da categoria
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Category.sync({force: false})

export default Category;