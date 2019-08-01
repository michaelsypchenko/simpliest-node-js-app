
const https = require('https');
const http = require('http');


http.createServer(function(request, response){

    https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            response.end("Hello my world! \n\n" + JSON.parse(data).explanation);
            console.log(JSON.parse(data).explanation);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
        response.end("Error: ");

    });
}).listen(3000);
