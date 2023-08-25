'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('listacompra', [
      {
        PK_idLista: 11,
        idUsuario: "viviana",
        nombre: "Cosas necesarias",
      }
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('listacompra', null, {});
  }
};
