let mongoose = require("mongoose");
let swsSchema = mongoose.Schema(
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

    e2h: {
      type: String,
    },
    e2d1: {
      type: String,
    },
    e2d2: {
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

    e4h: {
      type: String,
    },
    e4d1: {
      type: String,
    },
    e4d2: {
      type: String,
    },

    e5h: {
      type: String,
    },
    e5d1: {
      type: String,
    },
    e5d2: {
      type: String,
    },

    expressHeading: {
      type: String,
    },
    expressDescription: {
      type: String,
    },

    requirementsHeading: {
      type: String,
    },
    r1h: {
      type: String,
    },
    r1d1: {
      type: String,
    },
    r1d2: {
      type: String,
    },
    r1d3: {
      type: String,
    },

    r2h: {
      type: String,
    },
    r2d1: {
      type: String,
    },
    r2d2: {
      type: String,
    },
    r2d3: {
      type: String,
    },

    r3h: {
      type: String,
    },
    r3d1: {
      type: String,
    },
    r3d2: {
      type: String,
    },
    r3d3: {
      type: String,
    },

    r4h: {
      type: String,
    },
    r4d1: {
      type: String,
    },
    r4d2: {
      type: String,
    },
    r4d3: {
      type: String,
    },

    r5h: {
      type: String,
    },
    r5d1: {
      type: String,
    },
    r5d2: {
      type: String,
    },
    r5d3: {
      type: String,
    },

    r6h: {
      type: String,
    },
    r6d1: {
      type: String,
    },
    r6d2: {
      type: String,
    },
    r6d3: {
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
    a1d2: {
      type: String,
    },
    a1d3: {
      type: String,
    },
    a1d4: {
      type: String,
    },

    a2h: {
      type: String,
    },
    a2d1: {
      type: String,
    },
    a2d2: {
      type: String,
    },
    a2d3: {
      type: String,
    },
    a2d4: {
      type: String,
    },

    a3h: {
      type: String,
    },
    a3d1: {
      type: String,
    },
    a3d2: {
      type: String,
    },
    a3d3: {
      type: String,
    },
    a3d4: {
      type: String,
    },

    a4h: {
      type: String,
    },
    a4d1: {
      type: String,
    },
    a4d2: {
      type: String,
    },
    a4d3: {
      type: String,
    },
    a4d4: {
      type: String,
    },

    a5h: {
      type: String,
    },
    a5d1: {
      type: String,
    },
    a5d2: {
      type: String,
    },
    a5d3: {
      type: String,
    },
    a5d4: {
      type: String,
    },

    a6h: {
      type: String,
    },
    a6d1: {
      type: String,
    },
    a6d2: {
      type: String,
    },
    a6d3: {
      type: String,
    },
    a6d4: {
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

let swsSection = mongoose.model("Skilled Worker Stream", swsSchema);
module.exports = swsSection;
