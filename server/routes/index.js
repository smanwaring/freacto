// init router
const api = require('express').Router();


// require your Models up here...




//put your routes here....
api
  .use('/questions', require('./questions'))
  .use('/answers', require('./answers'))
  .use('/users', require('./users'))

// No API routes matched? 404.
api.use((req, res) => res.status(404).end())

module.exports = api;