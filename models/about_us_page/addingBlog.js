let mongoose = require("mongoose");
let addingBlogSchema = mongoose.Schema(
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

let addingBlogSection = mongoose.model("Adding Blog Section", addingBlogSchema);
module.exports = addingBlogSection;
