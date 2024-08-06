const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    content: {
      type: Array,
      required: true,
    },
  },
  { timeStamp: true }
);

// Add a toJSON method to the schema to control the output of blog instances
blogSchema.method("toJSON", function () {
  const {
    __v,
    _id,
    categoryIds,
    authorId: author,
    ...object
  } = this.toObject();
  object.id = _id;

  // Add category details to the blog object
  object.categories = categoryIds.map((category) => {
    return {
      id: category._id,
      title: category.title,
      description: category.description,
      color: category.color,
    };
  });

  // Add author details to the blog object
  if (authorId && authorId._id) {
    object.author = {
      id: author._id,
      firstName: author.firstName,
      lastName: author.lastName,
      email: author.email,
      image: author.image,
      bio: author.bio,
    }
  }

  return object;
});

module.exports = mongoose.model("Blog", blogSchema);