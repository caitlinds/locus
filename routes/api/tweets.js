const express = require('express');
const router = express.Router();
const tweetsCtrl = require('../../controllers/api/tweets');

router.get('/', tweetsCtrl.getAll);
router.post('/', tweetsCtrl.create);

module.exports = router;