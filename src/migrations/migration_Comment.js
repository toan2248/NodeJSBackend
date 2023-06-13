'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      commentID: {
        type: Sequelize.STRING,
        unique : true,
        allowNull : false
      },
      evaluate: {
        type: Sequelize.INTEGER,
        allowNull : false,
        defaultValue : 5
      },
      commentContent: {
        type: Sequelize.STRING,
        allowNull : false,
        defaultValue : "nice!!!"
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull : false,
        defaultValue :  new Date()
      },
      customerID: {
        type: Sequelize.STRING,
        allowNull : false,
        defaultValue : "Khách Hàng"
      },
      detailPlaceTravelID: {
        type: Sequelize.STRING,
        allowNull : false,
        defaultValue : ""
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
    await queryInterface.dropTable('Comments');
  }
};