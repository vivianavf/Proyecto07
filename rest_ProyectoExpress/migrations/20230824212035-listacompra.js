'use strict';  

const Listacompra = require('../models').listacompra;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Listacompra.sync();
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('listacompra');
  }
};

