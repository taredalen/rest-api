const {ensureAuthenticated} = require("../config/security.config");
const router = require('express').Router();

const { postElement, getElements, deleteElements } = require('../controllers/solution.controller')

router.get('/', ensureAuthenticated, getElements);


/*
router.get('/api', ensureAuthenticated, (req, res) => {
    console.log('req.user._id', req.user._id);
})

 */
router.post('/', postElement);
router.delete('/deleteAll', deleteElements);

module.exports = router;