'use strict';  

const Cliente = require('../models').cliente;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Cliente.sync();
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cliente');
  }
};
