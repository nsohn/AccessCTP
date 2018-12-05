const express = require('express');
const router = express.Router();

router.use('/api/user', require('./user'));
router.use('/auth', require('./auth'));
router.use('/test', require('./test'));
module.exports = router;
