let mongoose = require("mongoose");
let ourProcessSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default: "Our Process",
    },
    description: {
      type: String,
      default: "IT’S QUITE EASY. WE PROMISE",
    },
    step1heading: {
      type: String,
    },
    step1p1: {
      type: String,
    },
    step1p2: {
      type: String,
    },
    step1p3: {
      type: String,
    },
    step1p4: {
      type: String,
    },
    step1p5: {
      type: String,
    },
    step2heading: {
      type: String,
    },
    step2p1: {
      type: String,
    },
    step2p2: {
      type: String,
    },
    step2p3: {
      type: String,
    },
    step2p4: {
      type: String,
    },
    step2p5: {
      type: String,
    },
    step3heading: {
      type: String,
    },
    step3p1: {
      type: String,
    },
    step3p2: {
      type: String,
    },
    step3p3: {
      type: String,
    },
    step3p4: {
      type: String,
    },
    step3p5: {
      type: String,
    },
    step4heading: {
      type: String,
    },
    step4p1: {
      type: String,
    },
    step4p2: {
      type: String,
    },
    step4p3: {
      type: String,
    },
    step4p4: {
      type: String,
    },
    step4p5: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let ourProcessSection = mongoose.model("Our Process Section", ourProcessSchema);
module.exports = ourProcessSection;
