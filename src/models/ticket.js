'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ticket.belongsTo(models.PlaceTravel, {targetKey : "placeTravelID", foreignKey : "placeTravelID", as : "placeTravel"})
      Ticket.belongsTo(models.Customer, {targetKey : "customerID", foreignKey : "customerID", as : "customer"})
      Ticket.hasMany(models.DetailTicket, {sourceKey : "ticketID", foreignKey : "ticketID", as : "detailTicket"})
      Ticket.hasOne(models.CostTicket, {sourceKey : "ticketID", foreignKey : "ticketID", as : "costTicket"})
      Ticket.belongsTo(models.Schedule, {targetKey : "scheduleID", foreignKey : "scheduleID", as : "schedule"})
    }
  }
  Ticket.init({
    ticketID : DataTypes.STRING,
    numberAdult : DataTypes.INTEGER,
    numberChild: DataTypes.INTEGER,
    orderDate : DataTypes.DATEONLY,
    expiry : DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};