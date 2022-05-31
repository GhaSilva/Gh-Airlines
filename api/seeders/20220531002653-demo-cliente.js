"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    //insert into clientes(nome, cpf, createdAt, updatedAt) values ("Carla gomes", "48078246756", now(), now());
    //insert into clientes(nome, cpf, createdAt, updatedAt) values ("Ghabriel Silva", "48078256753", now(), now());
    //insert into clientes(nome, cpf, createdAt, updatedAt) values ("Rafaela Von Trapp", "48078246723", now(), now());
    //insert into clientes(nome, cpf, createdAt, updatedAt) values ("George Ferreira", "48078246753", now(), now());
    //insert into clientes(nome, cpf, createdAt, updatedAt) values ("Ryan Araújo", "38078246753", now(), now());
    //insert into clientes(nome, cpf, createdAt, updatedAt) values ("Renato Lopes", "48578246753", now(), now());

    await queryInterface.bulkInsert(
      "Clientes",
      [
        {
          nome: "Carla gomes",
          cpf: 48078246756,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Ghabriel Silva",
          cpf: 48078256753,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Rafaela Von Trapp",
          cpf: 48078246723,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "George Ferreira",
          cpf: 48078246753,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Ryan Araújo",
          cpf: 38078246753,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Renato Lopes",
          cpf: 48578246753,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
