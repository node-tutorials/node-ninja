const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const Blog = require("./models/blog");

const app = express();

// connect to mongoDB
const dbURI =
  "mongodb+srv://nodeninja:qweqwe@nodeninjacluster.ivpbzsg.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((res) => {
    console.log("connected to DB");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(morgan("dev"));

// mongoose and mongo sandbox routes
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog 3",
//     snippet: "about my new blog",
//     body: "more about my new blog",
//   });

//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// // get all blogs
// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// get a single blog
// app.get("/single-blog", (req, res) => {
//   Blog.findById("632326977b98ebf504c46fad")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

// Routing and HTML
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});

// Blog routes
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", {
        title: "All BLogs",
        blogs: result,
      });
    })
    .catch((er) => {
      console.log(er);
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
