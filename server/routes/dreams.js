const express = require('express');
const router = express.Router();
const { setDreams } = require('../controllers/dreams')

router.post('/', setDreams);

module.exports = router;