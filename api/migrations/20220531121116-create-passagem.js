'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Passagems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_da_compra: {
        type: Sequelize.DATE,
      },
      comprado: {
        type: Sequelize.BOOLEAN ,
        allowNull: false,
      },
      voo_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Voos", key: 'id'}
      },
      cadeira: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      comprador: {
          type: Sequelize.INTEGER,
          references: {model: "Clientes", key: 'id'},
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
    await queryInterface.dropTable('Passagems');
  }
};