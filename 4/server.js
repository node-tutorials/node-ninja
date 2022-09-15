const http = require("http");
const fs = require("fs");

// const server = http.createServer((req, res) => {
//   // console.log(req.url, req.method);
//   console.log(res);

//   // set header content type
//   // res.setHeader("Content-Type", "text/plain");
//   res.setHeader("Content-Type", "text/html");

//   // res.write("hello world");
//   res.write("<p>Hello World</p>");
//   res.write("<p>Hello World again</p>");
//   res.end();
// });

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   fs.readFile("./views/index.html", (err, data) => {
//     if (err) console.log(err);
//     else {
//       // res.write(data);
//       res.end(data);
//     }
//     res.end();
//   });
// });

const server = http.createServer((req, res) => {
  let path = "./views";

  switch (req.url) {
    case "/":
      path += "/index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "/about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "/404.html";
      res.statusCode = 404;
      break;
  }

  // res.setHeader("Content-Type", "text/html");

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);

      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});

/* Status code describe the type of response sent to the browser. 
- 220: OK
- 301: Resource moved
- 404: Not found
- 500: Internal server error

Generaly:
- 100 Range: Informational responses
- 200 Range: success codes
- 300 Range: codes for redirects
- 400 Range: user or client error codes
- 500 Range: server error codes

*/
