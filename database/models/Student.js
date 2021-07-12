const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {
  assignCampus : {
    type: Sequelize.INTEGER
  },
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    is: "^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$" // regex for valid emails
  },
  imageURL : {
      type: Sequelize.STRING,
      defaultValue: "/user.png",
  },
  gpa : {
    type: Sequelize.DECIMAL(2, 1)
  }
});

module.exports = Student;
