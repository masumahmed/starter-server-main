const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageURL : {
      type: Sequelize.STRING,
      defaultValue: "/campus.jpg",
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
