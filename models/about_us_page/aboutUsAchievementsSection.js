let mongoose = require("mongoose");
let aboutUsAchievementsSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "Our achievements are continually growing",
    },
    description1: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "Our Achievement Description here",
    },
    achievement1Numbers: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "15,745",
    },
    achievement1Heading: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "VISA PROCESSED",
    },
    achievement2Numbers: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "15,745",
    },
    achievement2Heading: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "VISA PROCESSED",
    },
    achievement3Numbers: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "15,745",
    },
    achievement3Heading: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "VISA PROCESSED",
    },
  },
  {
    timeStamps: true,
  }
);

let aboutUsAchievementsSection = mongoose.model(
  "About Us Achievements Section",
  aboutUsAchievementsSchema
);
module.exports = aboutUsAchievementsSection;
