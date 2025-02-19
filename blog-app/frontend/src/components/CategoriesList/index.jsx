import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./index.css";
import EditButtons from "../EditButtons";

export default function CategoriesList({ categories, onEdit, onDelete }) {
  const user = JSON.parse(localStorage.getItem("user"))
  if (!categories && !categories?.length) {
    return null;
  }

  return (
    <div className="category-list">
      {categories.map((category) => {
        return (
          <Link
            key={category.id}
            className="card"
            style={{ borderRadius: "0px", border: "none" }}
            to={`/categories`}
          >
            <div
              className="card-body w-100"
              style={{
                backgroundColor: category.color + "33",
                position: "relative",
                zIndex: 0,
              }}
            >
              <h5 className="card-title">{category.title}</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                {category.description.substring(1, 100)} ...
              </p>
            </div>
            {user && user.token && onEdit && onDelete && (
              <EditButtons onEdit={()=>{
                onEdit(category);
              
              }} onDelete={()=>{
                onDelete(category);
              }} />
            )}
          </Link>
        );
      })}
    </div>
  );
}

CategoriesList.prototype = {
  categories: PropTypes.array.isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};