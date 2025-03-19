let mongoose = require("mongoose");
let memberOfSchema = mongoose.Schema(
  {
    heading1: {
      type: String,
      default: "Member Of",
    },
    heading1Img: {
      type: String,
    },
    heading2: {
      type: String,
      default: "Member Of",
    },
    heading2Img: {
      type: String,
    },
    heading3: {
      type: String,
      default: "Accepted By",
    },
    heading3Img: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let memberOfSection = mongoose.model("Member Of Section", memberOfSchema);
module.exports = memberOfSection;
