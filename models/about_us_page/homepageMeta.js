let mongoose = require("mongoose");
let homeMetaSchema = mongoose.Schema(
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

let homeMetaSection = mongoose.model("Homepage Meta", homeMetaSchema);
module.exports = homeMetaSection;
