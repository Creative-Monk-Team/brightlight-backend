let mongoose = require("mongoose");
let faqSchema = mongoose.Schema(
  {
    heading: {
      type: String,
    },
    q1: {
      type: String,
    },
    a1: {
      type: String,
    },
    q2: {
      type: String,
    },
    a2: {
      type: String,
    },
    q3: {
      type: String,
    },
    a3: {
      type: String,
    },
    q4: {
      type: String,
    },
    a4: {
      type: String,
    },
    q5: {
      type: String,
    },
    a5: {
      type: String,
    },
    q6: {
      type: String,
    },
    a6: {
      type: String,
    },
    q7: {
      type: String,
    },
    a7: {
      type: String,
    },
    q8: {
      type: String,
    },
    a8: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let faqSection = mongoose.model("FAQ Section", faqSchema);
module.exports = faqSection;
