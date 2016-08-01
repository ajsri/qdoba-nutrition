var express = require("express");

var app = express();

app.use(express.static(process.env.PWD + "/public"));

app.get('/', function(request, response) {
  response.sendFile(process.env.PWD + '/index.html');
})

app.listen(process.env.PORT || 4741, function(){
  console.log("Listening");
})