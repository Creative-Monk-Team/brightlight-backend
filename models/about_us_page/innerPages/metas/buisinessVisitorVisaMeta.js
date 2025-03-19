let mongoose = require("mongoose");
let buisinessVisitorVisaMetaSchema = mongoose.Schema(
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

let buisinessVisitorVisaMetaSection = mongoose.model("Buisiness Visitor Visa Meta", buisinessVisitorVisaMetaSchema);
module.exports = buisinessVisitorVisaMetaSection;
