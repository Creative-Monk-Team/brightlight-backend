let mongoose = require("mongoose");
let aboutUsWeAreSchema = mongoose.Schema(
  {
    img: {
      type: String,
    },
    heading: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "Meet the Directors",
    },
  },
  {
    timeStamps: true,
  }
);

let aboutUsWeAreSection = mongoose.model(
  "About Us We Are Section",
  aboutUsWeAreSchema
);
module.exports = aboutUsWeAreSection;
