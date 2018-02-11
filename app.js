const express = require('express')
const app = express()

var path = require('path');

//app.get('/', (req, res) => res.send('Hello World!'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/test', function(req, res) {
  var db = require('./db');

});
app.listen(80, () => console.log('Example app listening on port 80!'))
