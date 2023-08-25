'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('supermercado', [
      {
        PK_idSupermercado: 1,
        nombre: "Supermaxi Ceibos",
        direccion: "C.C. Riocentro Ceibos"
      }
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('supermercado', null, {});
  }
};
