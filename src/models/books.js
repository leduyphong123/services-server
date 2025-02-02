"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.User, {foreignKey : "userId"})
    }
  }
  Book.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      code: DataTypes.STRING,
      img: DataTypes.STRING,
      userId: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
