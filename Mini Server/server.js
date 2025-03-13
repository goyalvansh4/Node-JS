const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if(req.url === '/' && req.method === 'GET') {
       const readStream = fs.createReadStream('./index.html');
        res.writeHead(200,{'Content-type': 'text/html'});
        readStream.pipe(res);
  }
  else if(req.url === '/' && req.method === 'POST') {
    res.end("You've made a POST request\n");
  }
  else {
    res.end('Invalid request\n');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
