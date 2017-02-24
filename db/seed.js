const db = require('./index');

const seedQuestion = () => db.Promise.each([

])

db.didSync
  .then(()=> deb.syn({ force:true }))
  .then(seedQuestion)
  .then(results => console.log('Seeded the questions!'))
  .catch(error => console.error(error));