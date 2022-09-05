const {ensureAuthenticated} = require("../config/security.config");
const { getScreens } = require('../controllers/screen.controller')

const router = require('express').Router();

router.get('/:prjid', getScreens);

module.exports = router;