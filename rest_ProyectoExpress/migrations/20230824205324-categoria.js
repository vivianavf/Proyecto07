'use strict';  

const Categoria = require('../models').categoria;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Categoria.sync();
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('categoria');
  }
};
