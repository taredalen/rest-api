const { ensureAuthenticated } = require('../config/security.config');

const router = require('express').Router();
//const solution = require('./solution.route');
const projects = require('./project.route');
const users = require('./user.route');
const auth = require('./auth.routes');


router.use('/users', users);
router.use('/auth', auth);
router.use('/projects', projects);

router.get('/protected', ensureAuthenticated, (req, res) => {
    console.log('req.cookies.jwt', req.cookies.jwt);

    //res.status(200).json( req.cookies.jwt);
    res.redirect('/projects');
});


//router.use('/api', solution);

module.exports = router;