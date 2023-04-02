const express = require('express');
const router = express.Router();
const tweetsCtrl = require('../../controllers/api/tweets');

router.get('/', tweetsCtrl.getAll);
router.post('/', tweetsCtrl.create);
router.post('/update', tweetsCtrl.update);
router.put('/delete', tweetsCtrl.deleteTweet);

module.exports = router;