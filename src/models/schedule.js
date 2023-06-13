'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Schedule.belongsTo(models.PlaceTravel, {targetKey : "placeTravelID", foreignKey : "placeTravelID", as : "placeTravel"})
      Schedule.hasOne(models.Ticket, {sourceKey : "scheduleID", foreignKey : "scheduleID", as : "ticket"})

    }
  }
  Schedule.init({
    scheduleID : DataTypes.STRING,
    departureDay : DataTypes.DATEONLY,
    departureTime: DataTypes.TIME,
    period: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};