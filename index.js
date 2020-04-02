const http = require("http");

http.createServer(
    function(request, response) {
        response.end("Hello Home");
    }
).listen(3000);
