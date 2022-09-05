const { ensureAuthenticated } = require("../config/security.config");
const { getProjects } = require('../controllers/project.controller');

const router = require('express').Router();

router.get('/', ensureAuthenticated, getProjects);

module.exports = router;