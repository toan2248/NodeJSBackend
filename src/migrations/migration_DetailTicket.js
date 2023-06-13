'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DetailTickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      detailTicketID: {
        type: Sequelize.STRING,
        allowNull : false,
        unique : true,
      },
      fullName: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.BOOLEAN,
      },
      birthday: {
        type: Sequelize.DATEONLY,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      passport: {
        type: Sequelize.STRING,
      },
      ticketID: {
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
    await queryInterface.dropTable('DetailTickets');
  }
};