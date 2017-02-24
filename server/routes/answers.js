const express = require('express');
const answersRouter = express.Router();
const db = require('../../db');

// get all questions
answersRouter.get('/', (req, res, next) => {
  db.model('answer').findAll()
  .then(answers => res.json(answers))
  .catch(next);
})

// get answer by ID
answersRouter.get('/:id', (req, res, next) => {
  db.model('answer').findById(req.params.id)
  .then(answer => res.json(answer))
  .catch(next);
})

// get answers by questionId
answersRouter.get('/question/:id', (req, res , next) => {
  db.model('answer').findAll({
    where: { questionId: req.params.id }
  }).then(questions => res.json(questions))
  .catch(next);
})

// create a answer
answersRouter.post('/', (req, res, next) => {
  db.model('answer').create(req.body)
  .then(answer => res.status(201).json(answer))
  .catch(next);
})

// update a answer
answersRouter.put('/:id', (req, res, next) => {
  db.model('answer').findById(req.params.id)
  .then(answer => answer.update(req.body))
  .then(updatedAnswer => res.status(201).json(updatedAnswer))
  .catch(next);
})

// delete a answer
answersRouter.delete('/:id', (req, res, next) => {
  db.model('answer').findById(req.params.id)
  .then(answer => answer.destroy())
  .then(ok => res.sendStatus(204))
  .catch(next);
})

module.exports = answersRouter;