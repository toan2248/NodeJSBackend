'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.DetailPlaceTravel, {targetKey : "detailPlaceTravelID" , foreignKey : "detailPlaceTravelID", as : "detailPlaceTravel"})
      Comment.belongsTo(models.Customer, {targetKey : "customerID" , foreignKey : "customerID", as : "customer"})
    }
  }
  Comment.init({
    commentID : {
      type : DataTypes.STRING,
      validate : {
        is : /^CM[0-9]{3}$/
      }
    },
    evaluate : DataTypes.INTEGER,
    commentContent: DataTypes.STRING,
    date: DataTypes.DATEONLY,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};