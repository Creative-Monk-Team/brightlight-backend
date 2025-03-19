let mongoose = require("mongoose");
let agricultAndAgriFoodOccuMetaSchema = mongoose.Schema(
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

let agricultAndAgriFoodOccuMetaSection = mongoose.model("Agriculture and Agri Food Occupation Meta", agricultAndAgriFoodOccuMetaSchema);
module.exports = agricultAndAgriFoodOccuMetaSection;
