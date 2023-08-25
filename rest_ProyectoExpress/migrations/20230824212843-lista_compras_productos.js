'use strict';  

const Lista_compras_productos = require('../models').lista_compras_productos;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Lista_compras_productos.sync();
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('lista_compras_productos');
  }
};
