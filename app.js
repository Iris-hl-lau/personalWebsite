let http = require('http');
let url = require("url");  
let fs = require('fs'); 
let express = require('express');
let app = express();
let port = process.env.PORT || 8080

http.createServer((request, response) => {
    let path = url.parse(request.url).pathname;  

    if(path == "/") {
        fs.readFile('./index.html' + path, function(error, data) {  
            if (error) {  
                response.writeHead(404);  
                //response.write();  
                response.end(error);  
            } else {  
                response.writeHead(200, {  
                    'Content-Type': 'text/html'  
                });  
                //response.write();  
                response.end(data);  
            }  
        });  
    } else {
        fs.readFile(__dirname + path, function(error, data) {  
            if (error) {  
                response.writeHead(404);  
                //response.write();  
                response.end(error);  
            } else {  
                response.writeHead(200, {  
                    'Content-Type': 'text/html'  
                });  
                //response.write();  
                response.end(data);  
            }  
        });  
    }  
}).listen(port,() => {
console.log('listening...');
});
