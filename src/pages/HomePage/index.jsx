import React from "react";

import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import BlogGrid from "../../components/BlogGrid";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import CategoryList from "../../components/CategoryList";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
const data = require("../../dummy-data.json");
const blogs = data.blogPosts.reverse();
const categories = data.categories;

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading/>
        <SubHeading subHeading={"Recent Blog Posts"} />
        <BlogGrid blogPosts={blogs}/>
        <SubHeading subHeading={"Categories"} />
        <CategoryList categories={categories}/>
        <Footer/>
      </div>
    </>
  );
}