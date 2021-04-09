const express = require('express');
const path = require('path');

const app = express();
app.use('/static', express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

const port = process.env.port || 5500;
app.listen(port);
