const express = require("express");

const blogController = require("../controllers/blogController");

/* express.Router() creates an instance of this router,
which is like a mini app.
Then we export this mini app and we import it in app.js and use it there.   */
const router = express.Router();

router.get("/", blogController.blog_index);
router.post("/", blogController.blog_create_post);

// Place this route before the "/blogs/:id"
router.get("/create", blogController.blog_create_get);

router.get("/:id", blogController.blog_details);
router.delete("/:id", blogController.blog_delete);

module.exports = router;
