'use strict';  

const Supermercado = require('../models').supermercado;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Supermercado.sync();
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('supermercado');
  }
};
