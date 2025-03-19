let mongoose = require("mongoose");
let privacyPolicySchema = mongoose.Schema(
  {
    heading: {
      type: String,
    },
    description: {
      type: String,
    },
    subHeading1: {
      type: String,
    },
    subHeadingDescription1: {
      type: String,
    },
    subHeading2: {
      type: String,
    },
    subHeadingDescription2: {
      type: String,
    },
    subHeading3: {
      type: String,
    },
    subHeadingDescription3: {
      type: String,
    },
    subHeading4: {
      type: String,
    },
    subHeadingDescription4: {
      type: String,
    },
    subHeading5: {
      type: String,
    },
    subHeadingDescription5: {
      type: String,
    },
    subHeading6: {
      type: String,
    },
    subHeadingDescription6: {
      type: String,
    },
    subHeading7: {
      type: String,
    },
    subHeadingDescription7: {
      type: String,
    },
    subHeading8: {
      type: String,
    },
    subHeadingDescription8: {
      type: String,
    },
    subHeading9: {
      type: String,
    },
    subHeadingDescription9: {
      type: String,
    },
    subHeading10: {
      type: String,
    },
    subHeadingDescription10: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

let privacyPolicySection = mongoose.model(
  "Privacy Policy",
  privacyPolicySchema
);
module.exports = privacyPolicySection;
