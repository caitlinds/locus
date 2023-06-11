const express = require('express');
const router = express.Router();
const timesCtrl = require('../../controllers/api/times');

router.get('/', timesCtrl.getAll);
router.get('/userall', timesCtrl.getUserAll);
// router.get('/status', timesCtrl.getStatus);
router.post('/', timesCtrl.create);
router.post('/update', timesCtrl.update);

module.exports = router;