const http = require('http');

const server = http.createServer((req, res) => {
  console.log('user hit the ser');
});

server.listen(5000);
