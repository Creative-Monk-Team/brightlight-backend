let mongoose = require("mongoose");
let newsSchema = mongoose.Schema(
  {
    news_heading: {
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
    alt_tag_featured: {
      type: String,
    },
    custom_url: {
      type: String
    },
    url: {
      type: String,
    },
    news_content: {
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

let newsSection = mongoose.model("All News", newsSchema);
module.exports = newsSection;
