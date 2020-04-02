const url = require('url');
const fs = require('fs');

const define = function(request, response, postData) {
    //response.end("hello home");
    const urlParsed = url.parse(request.url, true);
    let path = urlParsed.pathname;
    prePath = __dirname;
    try {
        let dynPath = './dynamic' + path;
        let routeDestination = require(dynPath);
        response.end('ee boy');
    }
    catch (err) {
        response.end('shit');
    }
};
exports.define = define;