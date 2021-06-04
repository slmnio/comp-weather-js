const port = 8921;

const express = require("express");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require("cors");
app.use(cors());

let lastWeatherData = null;

app.get('/', (req, res) => {
    console.log(":) nucleo board ping");
    res.send(`Hello Nucleo Board!`);
})

app.post('/data', (req, res) => {
    console.log(req.body);

    let data = {
        time: req.body.time,
        light: req.body.light,
        temperature: req.body.temperature,
        pressure: req.body.pressure,
    }


    if (["time", "light", "temperature", "pressure"].every(key => data[key] !== undefined && data[key] !== null)) {
        lastWeatherData = req.body;
    }

    res.send(":) thanks nucleo board");
})

app.get("/weather", (req, res) => {
    res.json(lastWeatherData || {error: "No data yet"});
})

app.listen(port, () => console.log(`comp-weather-js running at :${port}`));
