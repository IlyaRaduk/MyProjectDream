const db = require('./../DBpostgreSQL');

const setDreams = async (request, response) => {
    try {
        await db.query(`INSERT INTO dreams (email,dream) VALUES ('${request.body.email}','${request.body.dream}')`);
        response.sendStatus(200);
    }
    catch (err) {
        response.sendStatus(500);
    }
}

module.exports = {
    setDreams,
}