'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PlaceTravels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      placeTravelID: {
        type: Sequelize.STRING,
        allowNull : false,
        unique : true,
      },
      touristName: {
        type: Sequelize.STRING,
      },
      pointOfDeparture: {
        type: Sequelize.STRING,
      },
      destination: {
        type: Sequelize.STRING,
      },
      vehicle: {
        type: Sequelize.STRING,
      },
      typeOfTourism: {
        type: Sequelize.STRING,
      },
      avatarTourist: {
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
    await queryInterface.dropTable('PlaceTravels');
  }
};