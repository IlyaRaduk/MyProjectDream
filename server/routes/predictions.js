const express = require('express');
const router = express.Router();
const { getPrediction } = require('../controllers/predictions')

router.get('/', getPrediction);

module.exports = router;