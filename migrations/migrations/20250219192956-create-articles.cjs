'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Articles', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      body: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      categoryId: {  // A coluna para a chave estrangeira
        type: Sequelize.INTEGER,
        allowNull: true,  // Permitir NULL
        references: {
          model: 'Categories',  // Nome da tabela de categorias
          key: 'id',            // Chave primária da tabela Categories
        },
        onUpdate: 'CASCADE',    // Atualiza a chave estrangeira se a chave primária for alterada
        onDelete: 'SET NULL',   // Define NULL se a categoria for deletada
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Articles');
  },
};
