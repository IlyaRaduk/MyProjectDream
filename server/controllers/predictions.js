const db = require('./../DBpostgreSQL');

const getPrediction = async (request, response) => {
    try {
        let predictions = await db.query('SELECT * FROM prediction');
        predictions = predictions.rows;
        const predictionRandom = predictions[Math.floor(Math.random() * predictions.length)];
        response.send(predictionRandom);
    }
    catch (err) {
        response.sendStatus(500);
    }
}

module.exports = {
    getPrediction,
}