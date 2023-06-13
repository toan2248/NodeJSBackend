'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CostTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CostTicket.belongsTo(models.Ticket, {targetKey : "ticketID", foreignKey : "ticketID", as : "ticket"})
    }
  }
  CostTicket.init({
    costTicketID : DataTypes.STRING,
    priceOfAdult : DataTypes.INTEGER,
    priceOfChild: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CostTicket',
  });
  return CostTicket;
};