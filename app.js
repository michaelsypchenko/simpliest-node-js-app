
const https = require('https');
const http = require('http');


http.createServer(function(request, response1){

    var username = 'michaelsypchenko';

    var options = {
        host: 'api.github.com',
        path: '/users/' + username,
        // path: '/users/' + username + '/repos',
        method: 'GET',
        headers: {'user-agent': 'node.js'}
    };

    var request = https.request(options, function(response){
        var body = '';
        response.on("data", function(chunk){
            body += chunk.toString('utf8');
        });

        response.on("end", function(){
            console.log("Body: ", body);
            //JSON.parse(body)
            response1.end("Hello my world! \n\n" + body);
        });
    });

    request.end();

}).listen(3000);
