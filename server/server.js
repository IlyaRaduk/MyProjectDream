const express = require('express');
const MongoClient = require("mongodb").MongoClient;
const mongoClient = new MongoClient("mongodb://127.0.0.1:27017");
const app = express();
const port = 3005;

//Для CORS
app.use((request, response, next) => {
    response.append('Access-Control-Allow-Origin', ['http://localhost:3000']);
    response.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Authorization, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});
//Для парсинга application/json
app.use(express.json());
//Для парсинга application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

//Подключение Монго и запуск сервера
(async () => {
    try {
        await mongoClient.connect();
        app.locals.collectionWords = mongoClient.db("dream").collection("words");
        app.locals.collectionDreams = mongoClient.db("dream").collection("dreams");
        app.locals.collectionPredictions = mongoClient.db("dream").collection("predictions");
        app.listen(port, () => {
            console.log(`Exampl e app listening on port ${port}`)
        })
    } catch (err) {
        return console.log(err);
    }
})();

//routes
app.use('/words', require('./routes/words'));
app.use('/dreams', require('./routes/dreams'));
app.use('/predictions', require('./routes/predictions'));

// прослушиваем прерывание работы программы (ctrl-c)
process.on("SIGINT", async () => {
    await mongoClient.close();
    console.log("Приложение завершило работу");
    process.exit();
});