let mongoose = require("mongoose");
let aboutUsVisionSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "Our Vision",
    },
    headline1: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "Guiding aspiring clients for a brighter future in Canada.",
    },
    headline2: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "Leading the immigration industry with pioneering success.",
    },
    description: {
      type: String,
      required: [true, "Please fill out this field"],
      default:
        "We're driven by a passion to create continuous possibilities for those who seek our guidance for Canadian immigration. We believe that immigration is not just about paperwork and procedures, it is about making the way for individuals to pursue their dreams, connect with loved ones or build a better future.",
    },
  },
  {
    timeStamps: true,
  }
);

let aboutUsVisionSection = mongoose.model(
  "About Us Vision Section",
  aboutUsVisionSchema
);
module.exports = aboutUsVisionSection;
