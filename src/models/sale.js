'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sale.belongsTo(models.PlaceTravel, {targetKey : "placeTravelID", foreignKey : "placeTravelID", as : "placeTravel"})
    }
  }
  Sale.init({
    saleID : DataTypes.STRING,
    percent : DataTypes.INTEGER,
    dateStartSale : DataTypes.DATEONLY,
    dateEndSale : DataTypes.DATEONLY,
  }, {
    sequelize,
    modelName: 'Sale',
  });
  return Sale;
};