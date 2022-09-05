const router = require('express').Router();
const { signin, signout } = require('../controllers/auth.controller');

router.post('/login', signin);
router.get('/signout', signout);

module.exports = router;