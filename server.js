require('dotenv').config()

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var message = process.env.MESSAGE || "MISSING METHOD ENV"

app.use(function(req, res) {
  res.send(message);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
