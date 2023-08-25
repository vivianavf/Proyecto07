'use strict';  

const Producto = require('../models').producto;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Producto.sync();
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('producto');
  }
};
