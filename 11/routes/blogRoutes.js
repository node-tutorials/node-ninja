const express = require("express");

const Blog = require("../models/blog");

/* express.Router() creates an instance of this router,
which is like a mini app.
Then we export this mini app and we import it in app.js and use it there.   */
const router = express.Router();

router.get("/", (req, res) => {
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
router.post("/", (req, res) => {
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

// Place this route before the "/blogs/:id"
router.get("/create", (req, res) => {
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

// GET  SINGLE POST
router.get("/:id", (req, res) => {
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
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((er) => {
      console.log(er);
    });
});

module.exports = router;
