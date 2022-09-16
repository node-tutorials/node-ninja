const Blog = require("../models/blog");

/* Create functions using a similar kind of naming convention as the one of MDN 
// blog_index, blog_details etc
*/

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blogs/index", {
        title: "All BLogs",
        blogs: result,
      });
    })
    .catch((er) => {
      console.log(er);
    });
};

const blog_create_post = (req, res) => {
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
};

const blog_create_get = (req, res) => {
  res.render("blogs/create", {
    title: "Create a new blog",
  });
};

const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("blogs/details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).render("404", { title: "Blog not found." });
    });
};

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((er) => {
      console.log(er);
    });
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
