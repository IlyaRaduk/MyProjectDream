const db = require('./../DBpostgreSQL');

const getWordsFromLetter = async (request, response) => {
    try {
        let words = await db.query('SELECT * FROM words');
        words = words.rows;
        if (request.params.letter.length === 1) {
            words = words.filter((el) => { if (el.name[0] == request.params.letter) return true });
        }
        else {
            words = words.filter((el) => { if (el.name.startsWith(request.params.letter)) return true });
        }
        response.send(words);
    }
    catch (err) {
        response.sendStatus(500);
    }
}

const getAllWords = async (request, response) => {
    try {
        let words = await db.query('SELECT * FROM words');
        words = words.rows;
        response.send(words);
    }
    catch (err) {
        response.sendStatus(500);
    }
}


module.exports = {
    getWordsFromLetter,
    getAllWords,
}