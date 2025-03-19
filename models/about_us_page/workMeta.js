let mongoose = require("mongoose");
let workMetaSchema = mongoose.Schema(
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

let workMetaSection = mongoose.model("Work Permit Meta", workMetaSchema);
module.exports = workMetaSection;
