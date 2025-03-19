let mongoose = require("mongoose");
let expertiseSchema = mongoose.Schema(
  {
    heading1: {
      type: String,
    },
    description: {
      type: String,
    },
    video1: {
      type: String,
    },
    video2: {
      type: String,
    },
    video3: {
      type: String,
    },
    video4: {
      type: String,
    },
    video5: {
      type: String,
    },
    video6: {
      type: String,
    },
    video7: {
      type: String,
    },
    video8: {
      type: String,
    },
    video9: {
      type: String,
    },
    video10: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let expertiseSection = mongoose.model("Expertise Section", expertiseSchema);
module.exports = expertiseSection;
