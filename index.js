
var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end();
});

server.listen(8080);

window.onload = function() {
  var controller = new Controller();
  controller.inputListener($, document);
};
