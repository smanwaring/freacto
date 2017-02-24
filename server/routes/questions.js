const express = require('express');
const questionsRouter = express.Router();
const db = require('../../db');
const Sequelize = require('sequelize');

// get all questions
questionsRouter.get('/', (req, res, next) => {
  db.model('question').findAll()
  .then(questions => res.json(questions))
  .catch(next);
})

// get current question
questionsRouter.get('/current', (req, res, next) => {
  db.model('question').findOne({
    where: { current: true}
  }).then(question => {
    res.json(question)})
  .catch(next);
})

// get question by ID
questionsRouter.get('/:id', (req, res, next) => {
  db.model('question').findById(req.params.id)
  .then(question => res.json(question))
  .catch(next);
})

// make a question the current question
questionsRouter.put('/current', (req, res, next) => {
  db.model('question').find({
    where: { asked: false },
    order: [ Sequelize.fn('RANDOM')]
  }).then(question => {
    return question.update({ current: true, date: Date.now(), asked: true })
  }).then(currentQuestion => res.status(201).json(currentQuestion))
  .catch(next);
})

// create a question
questionsRouter.post('/', (req, res, next) => {
  db.model('question').create(req.body)
  .then(question => res.status(201).json(question))
  .catch(next);
})

// update a question
questionsRouter.put('/:id', (req, res, next) => {
  db.model('question').findById(req.params.id)
  .then(question => question.update(req.body))
  .then(updatedQuestion => res.status(201).json(updatedQuestion))
  .catch(next);
})

// delete a question
questionsRouter.delete('/:id', (req, res, next) => {
  db.model('question').findById(req.params.id)
  .then(question => question.destroy())
  .then(ok => res.sendStatus(204))
  .catch(next);
})

module.exports = questionsRouter;