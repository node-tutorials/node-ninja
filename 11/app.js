const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const blogRoutes = require("./routes/blogRoutes");

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
// app.use(blogRoutes);
/* We can scoop the above route to a specifiec URL.
Now the use middleware will apply the blogRoutes 
only when we go to /blogs. 
ATENTION! In this case you have to remove the /blogs string
from all the app.get(...) of the blogRoutes route.  */
app.use("/blogs", blogRoutes);

// 404
app.use((req, res) => {
  res.status(404).render("404", {
    title: "404",
  });
});
