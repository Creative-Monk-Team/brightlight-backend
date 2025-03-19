let mongoose = require("mongoose");
let aboutMetaSchema = mongoose.Schema(
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
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

let aboutMetaSection = mongoose.model("About Us Meta", aboutMetaSchema);
module.exports = aboutMetaSection;
