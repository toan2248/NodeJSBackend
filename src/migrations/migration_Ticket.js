'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ticketID: {
        type: Sequelize.STRING,
        allowNull : false,
        unique : true,
      },
      numberAdult: {
        type: Sequelize.INTEGER,
      },
      numberChild: {
        type: Sequelize.INTEGER,
      },
      orderDate: {
        type: Sequelize.DATEONLY,
      },
      scheduleID: {
        type: Sequelize.STRING,
      },
      expiry: {
        type: Sequelize.BOOLEAN,
      },
      placeTravelID: {
        type: Sequelize.STRING,
      },
      customerID: {
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
    await queryInterface.dropTable('Tickets');
  }
};