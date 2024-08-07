const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blogs");

const { protect } = require("../middleware/authMiddleware");

router.post("/", (req, res) => {
  blogController.createBlogs(req, res);  // Fix function name
});

router.get("/", (req, res) => {
  blogController.getBlogs(req, res);
});

router.get("/:id", (req, res) => {
  blogController.getBlogById(req, res);
});

router.get("/category/:id", (req, res) => {
  blogController.getBlogsByCategoryID(req, res);  // Fix function name
});

router.get("/author/:id", (req, res) => {
  blogController.getBlogsByAuthorId(req, res);  // Fix function name
});

router.put("/:id", protect, (req, res) => {
  blogController.updateBlogByID(req, res);  // Fix function name
});

router.delete("/:id", protect, (req, res) => {
  blogController.deleteBlogByID(req, res);  // Fix function name
});

module.exports = router;
