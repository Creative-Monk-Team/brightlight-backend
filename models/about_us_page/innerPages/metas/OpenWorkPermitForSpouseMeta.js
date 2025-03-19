let mongoose = require("mongoose");
let OpenWorkPermitForSpouseInMetaSchema = mongoose.Schema(
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

let OpenWorkPermitForSpouseInMetaSection = mongoose.model( "Open Work Permit For Spouse In Meta", OpenWorkPermitForSpouseInMetaSchema);
module.exports = OpenWorkPermitForSpouseInMetaSection;
