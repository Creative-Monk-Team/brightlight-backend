let mongoose = require("mongoose");
let loveneetBgAlt = mongoose.Schema(
  {
    alt: {
      type: String,
      default: "Brightlight Immigration",
    }
  },
  {
    timeStamps: true,
  }
);

let loveneetBgAltSection = mongoose.model("Loveneet Bg Alt", loveneetBgAlt);
module.exports = loveneetBgAltSection;
