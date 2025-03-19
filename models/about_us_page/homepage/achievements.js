let mongoose = require("mongoose");
let achievementsSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "Our achievements are continually growing",
    },
    description: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "Our Achievement Description here",
    },
    achievement1SVG: {
      type: String,
    },
    achievement1Alt: {
      type: String,
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
    achievement2SVG: {
      type: String,
    },
    achievement2Numbers: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "15,745",
    },
    achievement3SVG: {
      type: String,
    },
    achievement2Alt: {
      type: String,
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
    achievement3Alt: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let achievementsSection = mongoose.model(
  "Achievements Section",
  achievementsSchema
);
module.exports = achievementsSection;
