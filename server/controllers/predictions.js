const getPrediction = async (request, response) => {
    const collection = request.app.locals.collectionPredictions;
    try {
        let predictions = await collection.find({}).toArray();
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