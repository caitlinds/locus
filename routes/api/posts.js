const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

router.get('/', postsCtrl.getAll);
router.post('/', postsCtrl.create);

module.exports = router;