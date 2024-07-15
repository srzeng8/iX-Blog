import React from "react";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import CategoryList from "../../components/CategoryList";
import Footer from "../../components/Footer";

const data = require("../../dummy-data.json");
const categories = data.categories;

export default function CategoriesPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <SubHeading />
        <CategoryList categories={categories} />
        <Footer />
      </div>
    </>
  );
}