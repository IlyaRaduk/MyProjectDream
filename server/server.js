const express = require('express');
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

// запуск сервера
(async () => {
    try {
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