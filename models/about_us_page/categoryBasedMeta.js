let mongoose = require("mongoose");
let categoryBasedMetaSchema = mongoose.Schema(
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

let categoryBasedMetaSection = mongoose.model("Category Based Meta", categoryBasedMetaSchema);
module.exports = categoryBasedMetaSection;
