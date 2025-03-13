const http = require('http');
const fs = require('fs');

const server =http.createServer((req, res) => {
  const fileStream = fs.createReadStream("bigfile.txt");
  res.writeHead(200, { "Content-Type": "text/plain" });
  fileStream.pipe(res);
});


server.listen(3000,()=>{
  console.log('Server is running on port 3000');
})