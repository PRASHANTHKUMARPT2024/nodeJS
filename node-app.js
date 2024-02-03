// Import the http module
const http = require('http');

// Configure HTTP server to respond with "Hello, World!" for all requests
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World!\n');
});

// Listen on port 3000, IP address defaults to 127.0.0.1
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});

