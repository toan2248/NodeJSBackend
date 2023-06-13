'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerID: {
        type: Sequelize.STRING,
        allowNull : false,
        unique : true,
      },
      email: {
        type: Sequelize.STRING,
        unique : true,
        allowNull : false
      },
      password: {
        type: Sequelize.STRING,
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
        unique : true,
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
    await queryInterface.dropTable('Customers');
  }
};