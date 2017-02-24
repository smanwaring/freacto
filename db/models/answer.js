const Sequelize = require('sequelize');
const db = require('../');

const Answer = db.define('answer', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Answer;
