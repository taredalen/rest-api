const router = require('express').Router();
const { signIn} = require('../controllers/auth.controller')

router.post('/signIn', signIn);
//router.delete('/signOut', signOut);

module.exports = router;
