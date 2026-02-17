const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from Kubernetes Phase-3 🚀");
});

server.listen(3000);

