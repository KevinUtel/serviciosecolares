const { Router } = require('express')
const router = Router();
const {isAuthenticated} = require('../helpers/auth')
const { renderSignUpform, renderSigninform, signup, signin, logout } = require('../controllers/users.controllers')

/*

router.get('/users/signup', isAuthenticated, renderSignUpform);

router.post('/users/signup', isAuthenticated, signup);

*/
router.get('/users/signin', renderSigninform);

router.post('/users/signin', signin);

router.get('/users/logout', logout);

module.exports = router; 