const port = 8921;

const express = require("express");
const app = express();

app.get('/', (req, res) => {
    console.log(":) nucleo board ping");
    res.send(`Hello Nucleo Board!`);
})

app.listen(port, () => console.log(`comp-weather-js running at :${port}`));
