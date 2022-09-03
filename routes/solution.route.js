const router = require('express').Router();

const { postElement, getElements, deleteElements } = require('../controllers/solution.controller')

router.post('/post', postElement);
router.get('/getAll', getElements);
router.delete('/deleteAll', deleteElements);

module.exports = router;