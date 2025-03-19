let mongoose = require("mongoose");
let tradeOccupationTargDrawMetaSchema = mongoose.Schema(
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

let tradeOccupationTargDrawMetaSection = mongoose.model( "trade Occupation Target Draw Meta", tradeOccupationTargDrawMetaSchema);
module.exports = tradeOccupationTargDrawMetaSection;
