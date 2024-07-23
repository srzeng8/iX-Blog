import React from "react";
import BlogItem from "../BlogItem";
import PropTypes from "prop-types";

import "./index.css";

export default function BlogList({ blogs, onBlogEdit, onBlogDelete }) {
  if (!blogs || !blogs.length) {
    return null;
  }

  return (
    <div className="blog-grid">
      {blogs?.map((blog, index) => {
        return (
          <BlogItem
            key={index}
            blog={blog}
            imageOrientation={"top"}
            onBlogEdit={onBlogEdit}
            onBlogDelete={onBlogDelete}
          />
        );
      })}
    </div>
  );
}

BlogList.prototype = {
  blogs: PropTypes.array.isRequired,
  onBlogEdit: PropTypes.func,
  onBlogDelete: PropTypes.func,
};