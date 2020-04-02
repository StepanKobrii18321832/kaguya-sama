const http = require("http");
const routing = require('./routing');

let server = new http.Server(function(request, response) {
    let jsonString = '';
    response.setHeader('Content-Type', 'application/json');
    request.on('data', (data) => {
        jsonString += data;
    });
    request.on('end', () => {
        routing.define(request, response, jsonString);
    });
});
server.listen(8000, 'localhost');
console.log('> start');
