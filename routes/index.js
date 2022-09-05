const { ensureAuthenticated } = require('../config/security.config');

const router = require('express').Router();
const solution = require('./solution.route');
const users = require('./user.route');
const auth = require('./auth.routes');


router.use('/users', users);


router.get('/protected', ensureAuthenticated, (req, res) => {

    console.log('req.user._id');
    res.json(req.user._id);
})

router.use('/auth', auth);
router.use('/api', solution);

module.exports = router;