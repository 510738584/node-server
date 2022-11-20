const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Admin = sequelize.define('Admin',{
  loginId:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  loginPwd:{
    type:DataTypes.STRING,
    allowNull:false,
  }
},{
  paranoid:true,
  createdAt:false,
  updatedAt:false,
});

module.exports = Admin;