let mongoose = require("mongoose");
let aboutUsPillarsSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "Our Pillars",
    },
    description1: {
      type: String,
      required: [true, "Please fill out this field"],
      default:
        "We uphold the highest ethical standards, take responsibility for our actions and our clients needs, and fulfill our commitments to achieve successful outcomes. Integrity, responsibility and reliability are the pillars of our brand and the driving forces behind our success.",
    },
    pillar1Heading: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "INTEGRITY",
    },
    pillar1Description: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "We stand behind our word",
    },
    pillar2Heading: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "RESPONSIBILITY",
    },
    pillar2Description: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "We take behind our commitment seriously",
    },
    pillar3Heading: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "RELIABILITY",
    },
    pillar3Description: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "You can count us, always",
    },
  },
  {
    timeStamps: true,
  }
);

let aboutUsPillarsSection = mongoose.model(
  "About Us Pillars Section",
  aboutUsPillarsSchema
);
module.exports = aboutUsPillarsSection;
