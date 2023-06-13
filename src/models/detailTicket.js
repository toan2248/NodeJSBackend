'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DetailTicket.belongsTo(models.Ticket, {targetKey : "ticketID", foreignKey : "ticketID", as : "ticket"})
    }
  }
  DetailTicket.init({
    detailTicketID : DataTypes.STRING,
    fullName : DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    birthday: DataTypes.DATEONLY,
    phoneNumber: DataTypes.STRING,
    passport : DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'DetailTicket',
  });
  return DetailTicket;
};