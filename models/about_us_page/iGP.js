let mongoose = require("mongoose");
let igpSchema = mongoose.Schema(
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
    e1h: {
      type: String,
    },
    e1d1: {
      type: String,
    },
    e1d2: {
      type: String,
    },
    e1d3: {
      type: String,
    },
    e1d4: {
      type: String,
    },
    e1d5: {
      type: String,
    },

    e2h: {
      type: String,
    },
    e2d1: {
      type: String,
    },
    e2d2: {
      type: String,
    },
    e2d3: {
      type: String,
    },
    e2d4: {
      type: String,
    },
    e2d5: {
      type: String,
    },

    e3h: {
      type: String,
    },
    e3d1: {
      type: String,
    },
    e3d2: {
      type: String,
    },
    e3d3: {
      type: String,
    },
    e3d4: {
      type: String,
    },
    e3d5: {
      type: String,
    },

    e4h: {
      type: String,
    },
    e4d1: {
      type: String,
    },
    e4d2: {
      type: String,
    },
    e4d3: {
      type: String,
    },
    e4d4: {
      type: String,
    },
    e4d5: {
      type: String,
    },

    requirementsHeading: {
      type: String,
    },
    requirementsDescription: {
      type: String,
    },
    r1h: {
      type: String,
    },
    r2h: {
      type: String,
    },
    r3h: {
      type: String,
    },
    r4h: {
      type: String,
    },
    r5h: {
      type: String,
    },
    employerHeading: {
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
    e6: {
      type: String,
    },
    e7: {
      type: String,
    },
    e8: {
      type: String,
    },
    applicationHeading: {
      type: String,
    },
    a1h: {
      type: String,
    },
    a1d1: {
      type: String,
    },
    a2h: {
      type: String,
    },
    a2d1: {
      type: String,
    },
    a3h: {
      type: String,
    },
    a3d1: {
      type: String,
    },
    a4h: {
      type: String,
    },
    a4d1: {
      type: String,
    },

    a5h: {
      type: String,
    },
    a5d1: {
      type: String,
    },
    a6h: {
      type: String,
    },
    a6d1: {
      type: String,
    },
    a7h: {
      type: String,
    },
    a7d1: {
      type: String,
    },

    stillHeading: {
      type: String,
    },
    stillDesc1: {
      type: String,
    },
    stillDesc2: {
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

let igpSection = mongoose.model("IGP", igpSchema);
module.exports = igpSection;
