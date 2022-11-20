const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Book = sequelize.define('Book',{
  name:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  imgUrl:{
    type:DataTypes.STRING,
  },
  publish:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  author:{
    type:DataTypes.STRING,
    allowNull:false
  }
},{
  createdAt:false,
  updatedAt:false,
  paranoid:true
});

module.exports = Book;