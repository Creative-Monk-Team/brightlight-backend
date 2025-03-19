let mongoose = require("mongoose");
let newAddingBlogSchema = mongoose.Schema(
  {
    blog_heading: {
      type: String,
    },
    image: {
      type: String,
    },
    tag_1: {
      type: String,
    },
    tag_2: {
      type: String,
    },
    tag_3: {
      type: String,
    },
    custom_url: {
      type: String
    },
    alt_tag: {
      type: String,
    },
    url: {
      type: String,
    },
    blog_content: {
      type: String,
    },
    metaTitle: {
      type: String,
    },
    metaDescription: {
      type: String,
    },
    date: {
        type: Date,
        default: Date.now,
      },
  },
  {
    timestamps: true,
  }
);

let newAddingBlogSection = mongoose.model("New Adding Blog", newAddingBlogSchema);
module.exports = newAddingBlogSection;
