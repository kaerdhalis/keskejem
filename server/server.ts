import express from 'express';

const app: express.Application = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});