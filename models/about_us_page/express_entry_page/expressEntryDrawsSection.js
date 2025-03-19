let mongoose = require("mongoose");
let expressEntryDrawsSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: false,
      default:
        "In addition to the above programs, there are 3 categories of draws that you can get an Invitation to apply (ITA) from.",
    },
    description: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "lorem description here",
    },
    draw1: {
      type: String,
      required: true,
      default: "GENERAL DRAWS",
    },
    draw2: {
      type: String,
      required: true,
      default: "CATEGORY BASED SELECTION",
    },
    draw3: {
      type: String,
      required: true,
      default: "PNP BASED SELECTION",
    },
  },
  {
    timeStamps: true,
  }
);

let expressEntryDrawsSection = mongoose.model(
  "Express Entry Draws Section",
  expressEntryDrawsSchema
);
module.exports = expressEntryDrawsSection;
