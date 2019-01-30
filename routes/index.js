const express = require('express');
const router = express.Router();

router.use('/', require('./application.js'));
// router.use('/movie', require('./movieRouter'));
router.use('/user', require('./userRouter'));



module.exports = router;
