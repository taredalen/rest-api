const { ensureAuthenticated } = require('../config/security.config');

const router = require('express').Router();
//const solution = require('./solution.route');
const projects = require('./project.route');
const screens = require('./screen.route');
const tobjects = require('./tobject.route');
const users = require('./user.route');
const auth = require('./auth.routes');

router.use('/users', users);
router.use('/auth', auth);
router.use('/projects', projects);
router.use('/screens', screens);
router.use('/tobjects', tobjects);

router.get('/protected', ensureAuthenticated, (req, res) => {
    console.log('req.cookies.jwt', req.cookies.jwt);
    res.redirect('/projects');
});


//router.use('/api', solution);

module.exports = router;