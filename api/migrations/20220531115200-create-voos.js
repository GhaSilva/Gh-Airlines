'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Voos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      horario_de_saida: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      horario_de_chegada: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      aeroporto_de_origem: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aeroporto_de_destino: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantidade_de_assentos: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      preco: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Voos');
  }
};