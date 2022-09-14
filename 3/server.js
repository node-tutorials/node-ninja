const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request made");
});

// local host ad port numbers
// local host is like an ip adress, that directs to the loop back address of 127.0.0.1.
// A post number is a specifiek channer, gateway, like a door.
server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
