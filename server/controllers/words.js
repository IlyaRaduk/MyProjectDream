const db = require('./../DBpostgreSQL');

const getWords = async (request, response) => {
    try {
        let curPage = request.query.page - 1;
        let words;
        let totalCount;
        if (request.query.letter) {
            words = await db.query(`SELECT * FROM words WHERE name LIKE \'${request.query.letter}%\' ORDER BY name LIMIT 50 OFFSET ${curPage * 50}`);
            totalCount = await db.query(`SELECT COUNT(*) FROM words WHERE name like \'${request.query.letter}%\' `);
        }
        else {
            words = await db.query(`SELECT * FROM words ORDER BY name LIMIT 50 OFFSET ${curPage * 50}`);
            totalCount = await db.query(`SELECT COUNT(*) FROM words `);
        }
        response.set('x-total-count', totalCount.rows[0].count);
        response.set('Access-Control-Expose-Headers', 'x-total-count')
        words = words.rows;
        response.send(words);
    }
    catch (err) {
        response.sendStatus(500);
    }

}

module.exports = {
    getWords,
}