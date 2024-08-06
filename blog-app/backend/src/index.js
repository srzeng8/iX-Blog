const express = require("express");
const cors = require("cors");
// const path = require("path");
require("dotenv").config();

const blogRoutes = require("./routes/blogs");
const categoryRoutes = require("./routes/categories");
const authRoutes = require("./routes/auth");

const connectDB = require("./database/db");
const app = express();
const port = process.env.PORT || 8000;

connectDB();

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/blogs", blogRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/auth", authRoutes);

// app.use("/uploads", express.static(path.join(__dirname, "../../uploads")));

app.listen(port, () => {
  console.log(`IX blogging app listening on port ${port}`);
});