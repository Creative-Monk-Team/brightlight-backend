let mongoose = require("mongoose");
let aboutUsTopSectionSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "The Guiding Light for a Brighter Future!",
    },
    description: {
      type: String,
      required: [true, "Please fill out this field"],
      default:
        "Bright Light Immigration Inc. is a trusted immigration consulting firm based in Vancouver, serving Globally. We provide comprehensive services to individuals seeking to immigrate to Canada. We understand every twist and turn of the complex immigration process, whether its permanent residency, temporary residency, student visas, family reunification, work permits, LMIAs, caregiver services, PR renewal, or citizenship. We streamline and expedit the process to a level you never thought possible.",
    },
    feature1Heading: {
      type: String,
      required: true,
      default: "Trusted Canadian Immigration expert with over 12 years of experience.",
    },
    feature2Heading: {
      type: String,
      required: true,
      default: "Providing Comprehensive immigration services.",
    },
  },
  {
    timeStamps: true,
  }
);

let aboutUsTopSection = mongoose.model(
  "About Us Top Section",
  aboutUsTopSectionSchema
);
module.exports = aboutUsTopSection;
