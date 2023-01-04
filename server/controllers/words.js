
const getWordsFromLetter = async (request, response) => {
    const collection = request.app.locals.collectionWords;
    try {
        let words = await collection.find({}).toArray();

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
    const collection = request.app.locals.collectionWords;
    try {
        let words = await collection.find({}).toArray();
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