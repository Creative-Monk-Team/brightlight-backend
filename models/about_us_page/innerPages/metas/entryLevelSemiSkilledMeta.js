let mongoose = require("mongoose");
let entryLevelSemiSkilledMetaSchema = mongoose.Schema(
  {
    metaTitle: {
      type: String,
      default: "Brightlight Immigration",
    },
    metaDesc: {
      type: String,
      default: "Brightlight Immigration",
    },
    metaOgTitle: {
      type: String,
      default: "Brightlight Immigration",
    },
    metaOgDesc: {
      type: String,
      default: "Brightlight Immigration",
    },
    metaKeywords: {
      type: String,
      default: "Brightlight Immigration",
    }
  },
  {
    timestamps: true,
  }
);

let entryLevelSemiSkilledMetaSection = mongoose.model("Entry Level Semi Skilled  Meta",entryLevelSemiSkilledMetaSchema);
module.exports = entryLevelSemiSkilledMetaSection;
