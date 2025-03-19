let mongoose = require("mongoose");
let workPermitMetaSchema = mongoose.Schema(
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

let workPermitMetaSection = mongoose.model( "work Permit Meta", workPermitMetaSchema);
module.exports = workPermitMetaSection;
