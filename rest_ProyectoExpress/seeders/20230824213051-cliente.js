'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cliente', [
      {
        PK_idUsuario: "viviana",
        nombre: "Viviana Vera",
        email: "vivianavera03@gmail.com"
      }
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cliente', null, {});
  }
};
