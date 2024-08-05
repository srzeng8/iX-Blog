import React, { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import SubHeading from "../../components/Subheading";
import BlogGrid from "../../components/BlogGrid";
import CategoriesList from "../../components/CategoriesList";
import Footer from "../../components/Footer";

import blogService from "../../services/blogService";
import categoryService from "../../services/categoryService";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";
import Loading from "../../components/Loading";

export default function Home() {
  const [loading, setLoading] = useState();
  const [isSuccess, setIsSuccess] = useState();
  const [isError, setIsError] = useState();
  const [message, setMessage] = useState();
  const [blogs, setBlogs] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const blogsRes = await blogService.fetchBlogs();
        const categoryRes = await categoryService.fetchCategories();
        setBlogs(blogsRes.data.reverse());
        setCategories(categoryRes.data);
        setLoading(false);
      } catch (err) {
        setIsError(true);
        setMessage(err);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Heading />
      <div className="container">
        <SubHeading subHeading={"Recent blog posts"} />
        <BlogGrid blogs={blogs} />
        <SubHeading subHeading={"Categories"} />
        <CategoriesList categories={categories} />
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
      </div>
    </>
  );
}