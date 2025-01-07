import { Sequelize } from "sequelize";
import connection from "../database/database.js"; // Adicione a extensão ".js" se estiver usando ES6
import Category from "../categories/Category.js"; // Adicione a extensão ".js" se necessário

// Definição da tabela de artigos
const Article = connection.define("articles", {
    title: {
        type: Sequelize.STRING,  // Corrigido para STRING
        allowNull: false         // Título não pode ser nulo
    },
    slug: {
        type: Sequelize.STRING,  // Corrigido para STRING
        allowNull: false         // Slug não pode ser nulo
    },
    body: {
        type: Sequelize.TEXT,   // Texto longo para o conteúdo do artigo
        allowNull: false        // Corpo não pode ser nulo
    }
});

Category.hasMany(Article);      // Uma categoria possui muitos artigos
Article.belongsTo(Category);    // Um artigo pertence a uma categoria

// Sincronizar a tabela no banco de dados
// Use { force: true } apenas em ambiente de desenvolvimento!
// Article.sync({ force: true })  // Não recria a tabela automaticamente
//     .then(() => console.log("Tabela 'articles' sincronizada com sucesso!"))
//     .catch(err => console.error("Erro ao sincronizar a tabela 'articles':", err));

export default Article;

