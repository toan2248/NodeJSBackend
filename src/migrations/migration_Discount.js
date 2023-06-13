'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Discounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      discountID: {
        type: Sequelize.STRING,
        allowNull : false,
        unique : true,
      },
      percent: {
        type: Sequelize.INTEGER,
      },
      dateStartDiscount: {
        type: Sequelize.DATEONLY,
      },
      dateEndDiscount: {
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
    await queryInterface.dropTable('Discounts');
  }
};