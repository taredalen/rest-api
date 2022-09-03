const router = require('express').Router();
const users = require('./user.route');
const solution = require('./solution.route');

router.use('/users', users);
router.use('/api', solution);

module.exports = router;