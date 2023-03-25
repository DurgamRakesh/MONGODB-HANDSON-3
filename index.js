const express = require('express');
const employeeroute = require('./routes/employeeroute');
const bodyparser = require('body-parser');
const connect = require('./database/mongoose');
const app = express();
app.use(bodyparser.json());

app.use(employeeroute);

app.listen(9999, async () => {
    console.log('server is running on 9999');
    await connect();
})