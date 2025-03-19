let mongoose = require("mongoose");
let featuresAlt = mongoose.Schema(
  {
    alt1: {
      type: String,
      default: "Brightlight Immigration",
    },
    alt2: {
      type: String,
      default: "Brightlight Immigration",
    },
    alt3: {
      type: String,
      default: "Brightlight Immigration",
    },
    alt4: {
      type: String,
      default: "Brightlight Immigration",
    },
  },
  {
    timeStamps: true,
  }
);

let featuresAltSection = mongoose.model("Features Alt", featuresAlt);
module.exports = featuresAltSection;
