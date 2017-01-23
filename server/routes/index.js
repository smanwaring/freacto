// init router
const router = require('express').Router();

// require your Models up here...




//put your routes here....


// No API routes matched? 404.
router.use((req, res) => res.status(404).end())

module.exports = router;