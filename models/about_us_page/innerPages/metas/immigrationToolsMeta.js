let mongoose = require("mongoose");
let immigrationToolsSchema = mongoose.Schema(
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
    },
  },
  {
    timestamps: true,
  }
);

let immigrationToolsMeta = mongoose.model(
  "Immigration Tools Meta",
  immigrationToolsSchema
);
module.exports = immigrationToolsMeta;
