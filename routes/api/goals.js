const express = require('express');
const router = express.Router();
const goalsCtrl = require('../../controllers/api/goals');

router.get('/', goalsCtrl.getAll);
router.post('/', goalsCtrl.create);
router.post('/update', goalsCtrl.update);
router.put('/delete', goalsCtrl.deleteGoal);

module.exports = router;