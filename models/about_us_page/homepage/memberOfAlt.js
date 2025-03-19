let mongoose = require("mongoose");
let memberOfAlt = mongoose.Schema(
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
  },
  {
    timeStamps: true,
  }
);

let memberOfAltSection = mongoose.model("Member Of Alt", memberOfAlt);
module.exports = memberOfAltSection;
