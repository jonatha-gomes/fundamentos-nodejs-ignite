import http from "node:http"

const server = http.createServer((request, response) => {
  return response.end("Hello John");
});

server.listen(3333);