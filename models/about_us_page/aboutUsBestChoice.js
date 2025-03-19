let mongoose = require("mongoose");
let aboutUsBestSectionSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "What makes us the best choice for you ?",
    },
  },
  {
    timeStamps: true,
  }
);

let aboutUsBestChoiceSection = mongoose.model(
  "About Us Best Choice Section",
  aboutUsBestSectionSchema
);
module.exports = aboutUsBestChoiceSection;
