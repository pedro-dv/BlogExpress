import { Sequelize } from "sequelize";
import connection from "../database/database.js";

const Category = connection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false     // Não nulos para o título da categoria
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: { 
        type: Sequelize.STRING,
        allowNull: true  // Permite nulo para a imagem
    }
});

// Descomente a linha abaixo apenas para desenvolvimento, se necessário
//Category.sync({force: false}); // Usar com cautela em produção

export default Category;
