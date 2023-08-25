'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('producto', [
      {
        PK_idProducto: 2,
        nombre: "leche",
        categoria: 3,
        precio: 3.90,
        idSupermercado: 1
      }
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('producto', null, {});
  }
};
