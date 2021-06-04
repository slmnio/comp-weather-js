const port = 8921;

const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    console.log(":) nucleo board ping");
    res.send(`Hello Nucleo Board!`);
})

app.post('/data', (req, res) => {
    console.log(req.body);
    res.send(":) thanks nucleo board");
})

app.listen(port, () => console.log(`comp-weather-js running at :${port}`));
