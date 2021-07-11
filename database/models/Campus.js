const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {
  // Primary Key is campusID
  campusID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageURL : {
      type: Sequelize.STRING,
      defaultValue: "assets/campus.jpg",
  },
  address : {
    type: Sequelize.STRING,
    allowNull: false,

  },
  description: {
    type: Sequelize.STRING(2000),
  }
});

module.exports = Campus;
