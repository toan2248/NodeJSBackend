'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      saleID: {
        type: Sequelize.STRING,
        allowNull : false,
        unique : true,
      },
      percent: {
        type: Sequelize.INTEGER,
      },
      dateStartSale: {
        type: Sequelize.DATEONLY,
      },
      dateEndSale: {
        type: Sequelize.DATEONLY,
      },
      placeTravelID: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sales');
  }
};