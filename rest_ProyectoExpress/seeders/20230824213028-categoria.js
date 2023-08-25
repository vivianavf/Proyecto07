'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categoria', [
      {
        PK_idCategoria: 3,
        nombre: "alimentos",
      }
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categoria', null, {});
  }
};
