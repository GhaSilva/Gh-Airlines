"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Voos",
      [
        {
          horario_de_saida: new Date(),
          horario_de_chegada: new Date(),
          aeroporto_de_origem: "Guarulhos",
          aeroporto_de_destino: "Congonhas",
          quantidade_de_assentos: 5,
          preco: 100.00,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          horario_de_saida: new Date(),
          horario_de_chegada: new Date(),
          aeroporto_de_origem: "Congonhas",
          aeroporto_de_destino: "Guarulhos",
          quantidade_de_assentos: 5,
          preco: 150.00,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Voos', null, {});
     
  },
};
