import React, { useEffect, useState } from "react";

import BlogGrid from "../../components/BlogGrid";
import CategoriesList from "../../components/CategoriesList";
import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import Subheading from "../../components/Subheading";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";
import Loader from "../../components/Loader";

import blogsService from "../../services/blogsService";
import categoriesService from "../../services//categoryService";

export default function HomePage() {
  const [loading, setLoading] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const blogsRes = await blogsService.getBlogs();
        const categoriesRes = await categoriesService.getCategories();
        setBlogs(blogsRes.data);
        setCategories(categoriesRes.data);
        setLoading(false);
      } catch (error) {
        setIsError(true);
        setMessage(error.message);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <Subheading subHeading={"Recent blogs"} />
        <BlogGrid blogs={blogs} />
        <Subheading subHeading={"Categories"} />
        <CategoriesList categories={categories} />
      </div>
      <Footer />
      <SuccessToast
        show={isSuccess}
        message={message}
        onClose={() => {
          setIsSuccess(false);
        }}
      />
      <ErrorToast
        show={isError}
        message={message}
        onClose={() => {
          setIsError(false);
        }}
      />
    </>
  );
}