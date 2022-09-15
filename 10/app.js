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
/* urlencoded takes all the url encoded data, and it pass it in an object,
that we can use on the request object. */
app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded());
app.use(morgan("dev"));

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

// POST REQUEST
app.post("/blogs", (req, res) => {
  // console.log(req.body);
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((er) => {
      console.log(er);
    });
});

// GET  SINGLE POST
app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  // console.log(id);
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((er) => {
      console.log(er);
    });
});

// DELETE POST
app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((er) => {
      console.log(er);
    });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", {
    title: "Create a new blog",
  });
  blog
    .save()
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

// 404
app.use((req, res) => {
  res.status(404).render("404", {
    title: "404",
  });
});
