const express = require('express');
const fs = require('fs')
var bodyParser = require("body-parser");
const app = express()
app.use(express.json())
app.use(bodyParser.json())

const data = [{"id":"026"}];

app.get('/get_all', (req, res) => {
    res.send(data)
});

app.post('/post', (req, res) => {
    const newItem = {
        id: data.length + 1, // Assign a new ID
        name: req.body.name
    };

    data.push(newItem);

    res.json(newItem);
});

app.listen(5000, ()=>{
    console.log("express is running on port 5000");
});