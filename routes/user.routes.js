const express = require("express");
const { signup, login, findUserPerId } = require('../controllers/user.controller')
const router = express.Router();
const auth = require("../middleware/jwt.config");

router.post('/signup', signup);
router.post('/login', login);
router.get('/me', auth, findUserPerId);

module.exports = router;
