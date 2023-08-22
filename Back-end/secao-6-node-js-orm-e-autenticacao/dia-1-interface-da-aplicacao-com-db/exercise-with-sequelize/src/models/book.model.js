const sequelize = require("sequelize");

const BookModel = (sequelize, DataTypes) => {
    const Book = sequelize.define('Books', {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      pageQuantity: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    })
    return Book;
}

module.exports = BookModel;
