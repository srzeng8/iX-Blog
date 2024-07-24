import React, { useState, useEffect } from "react";

import "./index.css";

import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import Subheading from "../../components/Subheading";
import CategoriesList from "../../components/CategoriesList";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";

import categoryService from "../../services/categoryService";
import AddEditCategoryModal from "../../components/AddEditCategoryModal";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";
import DeleteCategoryModal from "../../components/DeleteCategoryModal";

export default function CategoriesPage() {
  const [isSuccess, setIsSuccess] = useState();
  const [isError, setIsError] = useState();
  const [message, setMessage] = useState();
  const [addCategory, setAddCategory] = useState();
  const [editCategory, setEditCategory] = useState();
  const [deleteCategory, setDeleteCategory] = useState();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState();

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const categories = await categoryService.getCategories();
        setCategories(categories.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchPageData();
  }, []);

  const onCategoryAdd = () => {
    setAddCategory({
      title: "",
      description: "",
      color: "",
    });
  };

  const onCategoryUpdate = (category) => {
    setEditCategory(category);
  };

  const onCategoryDelete = (category) => {
    setDeleteCategory(category);
  };

  const createCategory = async (category) => {
    try {
      const newCategory = await categoryService.createCategory(category);
      setIsSuccess(true);
      setMessage(newCategory.message);
      setCategories((prev) => {
        return [...prev, newCategory.data];
      });
    } catch (err) {
      setIsError(true);
      setMessage(err);
    }
    setAddCategory(null);
  };

  const updateCategory = async (category) => {
    try {
      const updatedCategory = await categoryService.updateCategory(category);
      setIsSuccess(true);
      setMessage(updatedCategory.message);
      setCategories((prev) => {
        const index = prev.findIndex((x) => x.id === updatedCategory.data.id);
        prev[index] = updatedCategory.data;
        return prev;
      });
    } catch (err) {
      setIsError(true);
      setMessage(err);
    }
    setEditCategory(null);
  };

  const removeCategory = async (category) => {
    try {
      const res = await categoryService.deleteCategory(category);
      setIsSuccess(true);
      setMessage(res.message);
      setCategories((prev) => {
        return prev.filter((x) => x.id !== category.id);
      });
    } catch (err) {
      setIsError(true);
      setMessage(err);
    }
    setDeleteCategory(null);
  };

  const AddButton = () => {
    return (
      <button className="btn btn-outline-dark my-4" onClick={onCategoryAdd}>
        ADD CATEGORY
      </button>
    );
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="flex-sub-heading">
          <Subheading subHeading={"Categories"} />
          <AddButton />
        </div>

        <CategoriesList
          categories={categories}
          onEdit={onCategoryUpdate}
          onDelete={onCategoryDelete}
        />
        <Footer />
      </div>
      <AddEditCategoryModal
        addCategory={addCategory}
        editCategory={editCategory}
        createCategory={createCategory}
        updateCategory={updateCategory}
        onClose={() => {
          setAddCategory(null);
          setEditCategory(null);
        }}
      />
      <DeleteCategoryModal
        deleteCategory={deleteCategory}
        removeCategory={removeCategory}
        onClose={() => {
          setDeleteCategory(null);
        }}
      />
      <SuccessToast
        show={isSuccess}
        message={message}
        onClose={() => {
          setIsSuccess(false);
          setMessage("");
        }}
      />
      <ErrorToast
        show={isError}
        message={message}
        onClose={() => {
          setIsError(false);
          setMessage("");
        }}
      />
    </>
  );
}