var express = require("express");

var app = express();

app.use(express.static("public"));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
})

app.listen(4741, function(){
  console.log("Listening on port 4741")
})