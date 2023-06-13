const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/all', usersCtrl.getAll);
router.post('/login', usersCtrl.login);
router.post('/update', usersCtrl.update);
router.post('/update-name', usersCtrl.updateName);
router.post('/update-phone', usersCtrl.updatePhone);
router.post('/update-title', usersCtrl.updateTitle);
router.post('/', usersCtrl.create);

module.exports = router;