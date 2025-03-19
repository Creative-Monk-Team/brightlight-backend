let mongoose = require("mongoose");
let restorationStatusDraftMetaSchema = mongoose.Schema(
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

let restorationStatusDraftMetaSection = mongoose.model( "restoration Status Draft  Meta", restorationStatusDraftMetaSchema);
module.exports = restorationStatusDraftMetaSection;
