'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('news', 'isPublic', {
      type: Sequelize.BOOLEAN,
      default: false,
      allowNull: false
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('news', 'isPublic');
  }
};
