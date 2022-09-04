const router = require('express').Router();
const solution = require('./solution.route');
const users = require('./user.route');
const auth = require('./auth.routes');

router.use('/users', users);
router.use('/api', solution);
router.use('/auth', auth);

module.exports = router;