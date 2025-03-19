let mongoose = require("mongoose");
let newsMetaSchema = mongoose.Schema(
  {
    metaTitle: {
      type: String,
    },
    metaDesc: {
      type: String,
    },
    metaOgTitle: {
      type: String,
    },
    metaOgDesc: {
      type: String,
    },
    metaKeywords: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

let newsMetaSection = mongoose.model("News Page Meta", newsMetaSchema);
module.exports = newsMetaSection;
