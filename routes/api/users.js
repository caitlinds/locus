const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/users'

router.get('/all', usersCtrl.getAll);
// POST /api/users (create a user - sign up)
// POST /api/users/login
router.post('/login', usersCtrl.login);
router.post('/update', usersCtrl.update);
// router.post('/clockIn', usersCtrl.clockIn);
// router.post('/clockOut', usersCtrl.clockOut);
router.post('/', usersCtrl.create);

module.exports = router;