'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('lista_compras_productos', [
      {
        idLista: 11,
        idProducto: 2
      }
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('lista_compras_productos', null, {});
  }
};
