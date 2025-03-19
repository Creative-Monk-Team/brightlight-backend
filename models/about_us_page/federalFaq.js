let mongoose = require("mongoose");
let federalFaqSchema = mongoose.Schema(
  {
    FaqTitle: {
      type: String,
    },
    FaqDesc: {
      type: String,
    },
    FaqOgTitle: {
      type: String,
    },
    FaqOgDesc: {
      type: String,
    },
    FaqKeywords: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

let federalFaqSection = mongoose.model(
  "Federal Skilled Faq",
  federalFaqSchema
);
module.exports = federalFaqSection;
