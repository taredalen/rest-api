const router = require('express').Router();
const {signup} = require('../controllers/users.controller')

router.post('/signup', signup);

module.exports = router;