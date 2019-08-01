const http = require("http");
http.createServer(function(request,response){

    response.end("Hello NodeJS!");

}).listen(3000, "206.81.19.178",function(){
    console.log("Сервер начал прослушивание запросов на порту 3000");
});