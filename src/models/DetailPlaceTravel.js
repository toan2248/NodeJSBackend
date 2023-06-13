'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailPlaceTravel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DetailPlaceTravel.belongsTo(models.PlaceTravel, {targetKey : "placeTravelID" ,foreignKey : "placeTravelID", as : "placeTravel"})
      DetailPlaceTravel.hasMany(models.Comment, {sourceKey : "detailPlaceTravelID", foreignKey : "detailPlaceTravelID", as : "comment"})
    }
  }
  DetailPlaceTravel.init({
    detailPlaceTravelID : DataTypes.STRING,
    reasonContent : DataTypes.TEXT,
    scheduleContent: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'DetailPlaceTravel',
  });
  return DetailPlaceTravel;
};