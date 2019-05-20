//1. Basic server setup

//Dependencies
var http = require("http");
var url = require("url");

//configure the server to recieve a request and deliver a responec

var server = http.createServer(function(request, responce) {
  //parse ethe url
  var parsedUrl = url.parse(request.url, true);

  //get the path
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g, "");

  //send responce

  responce.end("Responce from server");

  //log actual path
  console.log("actual path is " + path);
  console.log("Trimmed path is " + trimmedPath);
  console.log("full request is  " + request);
});

// Starting the server
server.listen(3000, function() {
  console.log(" Server is running now");
});
