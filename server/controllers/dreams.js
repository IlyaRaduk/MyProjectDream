const setDreams = async (request, response) => {
    const collection = request.app.locals.collectionDreams;
    try {
        await collection.insertOne({ email: request.body.email, dream: request.body.dream });
        response.sendStatus(200);
    }
    catch (err) {
        response.sendStatus(500);
    }
}

module.exports = {
    setDreams,
}