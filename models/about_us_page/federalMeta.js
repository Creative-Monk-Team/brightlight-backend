let mongoose = require("mongoose");
let federalMetaSchema = mongoose.Schema(
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

let federalMetaSection = mongoose.model(
  "Federal Skilled Meta",
  federalMetaSchema
);
module.exports = federalMetaSection;
