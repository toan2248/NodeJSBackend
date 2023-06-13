'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlaceTravel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PlaceTravel.hasOne(models.DetailPlaceTravel, {sourceKey : "placeTravelID", foreignKey : "placeTravelID", as : "detailPlaceTravel"})
      PlaceTravel.hasOne(models.Fare, {sourceKey : "placeTravelID", foreignKey : "placeTravelID", as : "fare"})
      PlaceTravel.hasMany(models.Schedule, {sourceKey : "placeTravelID", foreignKey : "placeTravelID", as : "schedule"})
      PlaceTravel.hasMany(models.Discount, {sourceKey : "placeTravelID", foreignKey : "placeTravelID", as : "discount"})
      PlaceTravel.hasMany(models.Ticket, {sourceKey : "placeTravelID", foreignKey : "placeTravelID", as : "ticket"})
    }
  }
  PlaceTravel.init({
    placeTravelID : DataTypes.STRING,
    touristName : DataTypes.STRING,
    pointOfDeparture: DataTypes.STRING,
    destination: DataTypes.STRING,
    vehicle: DataTypes.STRING,
    typeOfTourism : DataTypes.STRING,
    avatarTourist : DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'PlaceTravel',
  });
  return PlaceTravel;
};