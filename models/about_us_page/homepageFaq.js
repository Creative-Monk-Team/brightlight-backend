let mongoose = require("mongoose");
let homeFaqSchema = mongoose.Schema(
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

let homeFaqSection = mongoose.model("Homepage Faq", homeFaqSchema);
module.exports = homeFaqSection;
