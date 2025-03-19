let mongoose = require("mongoose");
let comLawPartPermanMetaSchema = mongoose.Schema(
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

let comLawPartPermanMetaSection = mongoose.model("Commmon Law Partner Permanent  Meta", comLawPartPermanMetaSchema);
module.exports = comLawPartPermanMetaSection;
