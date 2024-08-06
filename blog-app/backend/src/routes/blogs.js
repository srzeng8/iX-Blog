// const express = require("express");
// const router = express.Router();

// const blogController = require("../controllers/blogs");

// const { protect } = require("../middleware/authMiddleware");

// router.post("/", protect, (req, res) => {
//   createBlog(req, res);
// });

// router.get("/", (req, res) => {
//   getBlogs(req, res);
// });

// router.get("/:id", (req, res) => {
//   getBlog(req, res);
// });

// router.put("/:id", protect, (req, res) => {
//   updateBlog(req, res);
// });

// router.delete("/:id", protect, (req, res) => {
//   deleteBlog(req, res);
// });

// module.exports = router;