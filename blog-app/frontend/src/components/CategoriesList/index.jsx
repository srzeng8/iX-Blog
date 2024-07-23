import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import "./index.css";

export default function CategoriesList({ categories }) {
  const navigate = useNavigate();
  const navigateToBlog = (categoryId) => {
    navigate("/blogs/" + categoryId);
  };
  if (!categories) {
    return null;
  }
  return (
    <div className="category-list">
      {categories.map((category) => {
        return (
          <button
            key={category.id}
            className="card"
            style={{ borderRadius: "0px", border: "none", padding: "0px" }}
            onClick={() => {
              navigateToBlog(category.id);
            }}
          >
            <div
              className="card-body"
              style={{
                backgroundColor: category.color + "33",
                position: "relative",
                zIndex: 0,
                width: "100%",
              }}
            >
              <h5 className="card-title">{category.title}</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                {category.description.substring(1, 100)} ...
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

CategoriesList.prototype = {
  categories: PropTypes.array.isRequired,
};