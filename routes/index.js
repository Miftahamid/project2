const express = require('express');
const router = express.Router();

router.use('/', require('./application.js'));
router.use('/user', require('./userRouter'));
router.use('/movie', require('./movieRouter'));


module.exports = router;
