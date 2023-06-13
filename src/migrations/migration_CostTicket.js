'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CostTickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      costTicketID: {
        type: Sequelize.STRING,
        allowNull : false,
        unique : true,
      },
      priceOfAdult: {
        type: Sequelize.INTEGER,
      },
      priceOfChild: {
        type: Sequelize.INTEGER,
      },
      ticketID : {
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
    await queryInterface.dropTable('CostTickets');
  }
};