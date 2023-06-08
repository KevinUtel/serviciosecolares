const { Router } = require('express')
const router = Router();

const { renderSignUpform, renderSigninform, signup, signin, logout } = require('../controllers/users.controllers')


router.get('/users/signup', renderSignUpform);

router.post('/users/signup', signup);

router.get('/users/signin', renderSigninform);

router.post('/users/signin', signin);

router.get('/users/logout', logout);

module.exports = router; 