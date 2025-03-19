let mongoose = require("mongoose");
let ppSchema = mongoose.Schema(
  {
    heading: {
      type: String,
    },
    description: {
      type: String,
    },
    description2: {
      type: String,
    },
    benefitsHeading: {
      type: String,
    },
    b1: {
      type: String,
    },
    b2: {
      type: String,
    },
    b3: {
      type: String,
    },
    b4: {
      type: String,
    },
    eligibilityHeading: {
      type: String,
    },
    eligibilityDescription: {
      type: String,
    },
    e1: {
      type: String,
    },

    e2: {
      type: String,
    },

    e3: {
      type: String,
    },

    e4: {
      type: String,
    },

    e5: {
      type: String,
    },

    applicationHeading: {
      type: String,
    },
    a1: {
      type: String,
    },
    a2: {
      type: String,
    },
    a3: {
      type: String,
    },
    a4: {
      type: String,
    },
    a5: {
      type: String,
    },
    aend: {
      type: String,
    },

    whyChooseHeading: {
      type: String,
    },
    whyChooseDesc: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

let ppSection = mongoose.model("Program Priorities", ppSchema);
module.exports = ppSection;
