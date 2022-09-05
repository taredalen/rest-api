const { getTobjects, updateTobjects } = require('../controllers/tobject.controller')

const router = require('express').Router();

router.get('/:screen', getTobjects);
router.post('/update/:screen', updateTobjects);

module.exports = router;