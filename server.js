var express = require("express");

var app = express();

app.use(express.static("public"));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
})

app.listen(process.env.PORT || 4741), function(){
  console.log("Listening")
})