const express = require('express');
const usersRouter = express.Router();
const db = require('../../db');

// get all users
usersRouter.get('/', (req, res, next) => {
  db.model('user').findAll()
  .then(users => res.json(users))
  .catch(next);
})

// get user by ID
usersRouter.get('/:id', (req, res, next) => {
  db.model('user').findById(req.params.id)
  .then(user => res.json(user))
  .catch(next);
})

// when a user logs in with google, find or create that user
usersRouter.post('/', (req, res, next) => {
  db.model('user').findOrCreate({
    where: {
      email: req.body.email,
    },
    defaults: {
      name: req.body.name,
      authId: req.body.authId
    }
  })
  .spread((user, wasCreated) => {
    if (wasCreated){
      res.status(201).json(user);
    } else {
      res.json(user);
    }
  })
  .catch(next);
});

// update a user
usersRouter.put('/:id', (req, res, next) => {
  db.model('user').findById(req.params.id)
  .then(user => user.update(req.body))
  .then(updatedUser => res.status(201).json(updatedUser))
  .catch(next);
})

// delete a user
usersRouter.delete('/:id', (req, res, next) => {
  db.model('user').findById(req.params.id)
  .then(user => user.destroy())
  .then(ok => res.sendStatus(204))
  .catch(next);
})

module.exports = usersRouter;