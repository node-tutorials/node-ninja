const express = require("express");

// Set up an express app
const app = express();

// listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  // send automaticaly sets the content type and the status code
  // res.send("<p>Home page<p>");
  /* Express is going to look for an apsolute path (the path from the root of our computer)
  So we pass a second parameter
  */
  res.sendFile("./views/index.html", { root: __dirname });
});

// Routing and HTML
app.get("/about", (req, res) => {
  // send automaticaly sets the content type and the status code
  // res.send("<p>About page<p>");
  res.sendFile("./views/about.html", { root: __dirname });
});

// Redirect
app.get("/about-us", (req, res) => {
  res.redirect("./about");
});

// 404
/* This use func is going to fire only if the code comes up to this point. */
app.use((req, res) => {
  /* We also need to set manualy a 404 error. */
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
