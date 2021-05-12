const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>A simple webpage for Nodejs task</h1>");
    res.end();
}).listen(5003, console.log("server running on port 5003"));