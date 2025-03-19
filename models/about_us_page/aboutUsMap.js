let mongoose = require("mongoose");
let aboutUsMapSchema = mongoose.Schema(
  {
    mapIframe: {
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

let aboutUsMapSection = mongoose.model(
  "About Us Map Section",
  aboutUsMapSchema
);
module.exports = aboutUsMapSection;
