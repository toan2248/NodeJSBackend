'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      scheduleID: {
        type: Sequelize.STRING,
        allowNull : false,
        unique : true,
      },
      departureDay: {
        type: Sequelize.DATEONLY,
      },
      departureTime: {
        type: Sequelize.TIME,
      },
      period: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Schedules');
  }
};