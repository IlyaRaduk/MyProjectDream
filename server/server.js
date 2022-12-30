const express = require('express');
const app = express();
const port = 3005;
const MongoClient = require("mongodb").MongoClient;
const mongoClient = new MongoClient("mongodb://127.0.0.1:27017");
const bodyParser = require("body-parser");

app.use((request, response, next) => {
    response.append('Access-Control-Allow-Origin', ['http://localhost:3000']);
    response.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Authorization, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});
const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));

(async () => {
    try {
        await mongoClient.connect();
        app.locals.collectionWords = mongoClient.db("dream").collection("words");
        app.listen(port, () => {
            console.log(`Exampl e app listening on port ${port}`)
        })
    } catch (err) {
        return console.log(err);
    }
})();

app.get('/words/:letter', async (request, response) => {
    const collection = request.app.locals.collectionWords;
    try {
        let words = await collection.find({}).toArray();
        words = words.filter((el) => { if (el.name[0] == request.params.letter) return true })
        response.send(words);
    }
    catch (err) {
        response.sendStatus(500);
    }
})

app.get('/word/:word', async (request, response) => {
    const collection = request.app.locals.collectionWords;
    try {
        const word = await collection.findOne({ name: request.params.word });
        response.send(word);
    }
    catch (err) {
        console.log(err);
        response.sendStatus(500);
    }
})

// прослушиваем прерывание работы программы (ctrl-c)
process.on("SIGINT", async () => {

    await mongoClient.close();
    console.log("Приложение завершило работу");
    process.exit();
});