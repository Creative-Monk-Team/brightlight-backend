let mongoose = require("mongoose");
let homepageTopSchema = mongoose.Schema(
  {
    headline1: {
      type: String,
      default: "Feeling Overwhelmed?",
    },
    headline2: {
      type: String,
      default: "Just Received a Refusal?",
    },
    SmallHeadline1: {
      type: String,
      default: "WE'VE HELPED MANY OVERCOME THEM",
    },
  },
  {
    timeStamps: true,
  }
);

let homepageTopSection = mongoose.model("Home Top Section", homepageTopSchema);
module.exports = homepageTopSection;
