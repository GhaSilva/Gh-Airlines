"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Passagem",
      [
        {
          data_da_compra: null,
          comprado: false,
          voo_id: 1,
          cadeira: 1,
          comprador: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          data_da_compra: null,
          comprado: false,
          voo_id: 1,
          cadeira: 2,
          comprador: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          data_da_compra: null,
          comprado: false,
          voo_id: 2,
          cadeira: 1,
          comprador: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          data_da_compra: null,
          comprado: false,
          voo_id: 2,
          cadeira: 2,
          comprador: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Passagem", null, {});
  },
};
