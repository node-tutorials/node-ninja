const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schemas defines the structure of a type of data / document.
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Models allow us to communicate with database collections.
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
