const http = require("http");

const server = http.createServer((req, res) => {
  // res.end("Hello from Kubernetes Phase-3 🚀");
  res.end("Version 2 🚀");

});

server.listen(3000);

