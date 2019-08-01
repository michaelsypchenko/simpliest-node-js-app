const http = require("http");

http.createServer(function(request, response){

    response.end("Hello my world!");
}).listen(3000);
