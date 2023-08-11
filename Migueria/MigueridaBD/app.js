const express = require('express');
const bodyParser = require('body-parser');
const db = require('./laMigueria.bd');

const app = express();
app.use(bodyParser.json);

app.post('/usuarios', (req, res) =>{
    
})