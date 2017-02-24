const Question = require('./question');
const Answer = require('./answer');
const User = require('./user');

/* ------ Associations * ----- */
Question.hasMany(Answer);
Answer.belongsTo(Question);

User.hasMany(Question);
Question.belongsTo(User);

User.hasMany(Answer);
Answer.belongsTo(User);


module.exports = {
  Question,
  Answer,
  User
};
