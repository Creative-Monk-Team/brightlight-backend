// We are Vancouver based, serving Globally.

let mongoose = require("mongoose");
let aboutUsGloballySchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "We are Vancouver based, serving Globally.",
    },
    description1: {
      type: String,
      required: [true, "Please fill out this field"],
      default:
        "Looking for the latest Canadian immigration news and insights? Want to see how we've helped past clients achieve their goals? Or maybe you just want some reassurance that we'll handle your case with care? Well, you're in luck! Our social media platforms are buzzing with all that and more.",
    }
  },
  {
    timeStamps: true,
  }
);

let aboutUsGloballySection = mongoose.model(
  "About Us Serving Globally Section",
  aboutUsGloballySchema
);
module.exports = aboutUsGloballySection;
