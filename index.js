const http = require('http');
const path = require('path');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/')
    {
        fs.readFile(path.join(__dirname, 'static', 'index.html'), (err, 
            content) => 
        {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });
    }
    if (req.url === '/about')
    {
        fs.readFile(path.join(__dirname, 'static', 'about.html'), (err, 
            content) => 
        {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });
    }
    if (req.url === '/contact-me')
    {
        fs.readFile(path.join(__dirname, 'static', 'contact-me.html'), (err, 
            content) => 
        {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });
    }
    if (req.url === '/404')
    {
        fs.readFile(path.join(__dirname, 'static', '404.html'), (err, 
            content) => 
        {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})