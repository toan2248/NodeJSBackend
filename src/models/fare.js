'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fare extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Fare.belongsTo(models.PlaceTravel, {targetKey : "placeTravelID", foreignKey : "placeTravelID", as : "placeTravel"})
      
    }
  }
  Fare.init({
    fareID : DataTypes.STRING,
    fareAdult : DataTypes.INTEGER,
    fareChild: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Fare',
  });
  return Fare;
};