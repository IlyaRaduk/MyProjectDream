const express = require('express');
const router = express.Router();
const { getAllWords, getWordsFromLetter } = require('../controllers/words')

router.get('/', getAllWords);

router.get('/:letter', getWordsFromLetter);

module.exports = router;