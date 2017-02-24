const express = require('express');
const questionsRouter = express.Router();
const db = require('../../db');

// get all questions
questionsRouter.get('/', (req, res, next) => {
  db.model('question').findAll()
  .then(questions => res.json(questions))
  .catch(next);
})

// get question by ID
questionsRouter.get('/:id', (req, res, next) => {
  db.model('question').findById(req.params.id)
  .then(question => res.json(question))
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