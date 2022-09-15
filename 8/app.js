const express = require("express");
const morgan = require("morgan");

// Set up an express app
const app = express();

// register view engine
app.set("view engine", "ejs");

// listen for requests
app.listen(3000);

// app.use((req, res, next) => {
//   console.log("new request made:");
//   console.log("host: ", req.hostname);
//   console.log("path: ", req.path);
//   console.log("method: ", req.method);
//   next();
// });

// app.use((req, res, next) => {
//   console.log("In the next middleware:");

//   next();
// });

app.use(morgan("dev"));

// middleware & static files
app.use(express.static("public"));

app.get("/", (req, res) => {
  // const blogs = [];
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];

  /* Passing data from server to webpage dynamicaly = serverside rendering*/
  res.render("index", {
    title: "Home",
    blogs,
  });
});

// app.use((req, res, next) => {
//   console.log("In the next middleware after homepage:");

//   next();
// });

// Routing and HTML
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", {
    title: "Create a new blog",
  });
});
// 404
app.use((req, res) => {
  res.status(404).render("404", {
    title: "404",
  });
});
