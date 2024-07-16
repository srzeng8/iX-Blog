import React from "react";
import BlogItem from "../BlogItem";

export default function BlogList({ blogs }) {
  if (!blogs || !blogs.length) {
    return null;
  }

  return (
    <div className="blog-grid">
      {blogs?.map((blog, index) => {
        return <BlogItem key={index} blog={blog} imageOrientation={"top"} />;
      })}
    </div>
  );
}