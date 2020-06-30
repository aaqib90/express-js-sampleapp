const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const PORT = 3000;


app.use(bodyParser.json());

app.get('/get-employee' ,(req, res) => {
    const obj = {
        id: 1,
        name: 'John Doe'
    };
    console.log("GET: /get-employee called");
    res.send(obj);
})

app.post('/create-employee', (req, res) => {
    const body = req.body;
    console.log("POST: /create-employee called");
    res.send({
        message: "Updated!",
        data: body
    });
})

app.put('/update-employee', (req, res) => {
    const body = req.body;
    console.log("PUT: /update-employee called");
    res.send({
        message: "Updated!",
        data: body
    });
})

app.listen(PORT, () => `server is runnig at ${PORT}`)