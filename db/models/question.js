const Sequelize = require('sequelize');
const db = require('../');

const Question = db.define('question', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  category: {
    type: Sequelize.STRING  
  },
  asked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  difficulty: {
    type: Sequelize.ENUM,
    values: ["easy", "medium", "hard"]
  }
});

module.exports = Question;
