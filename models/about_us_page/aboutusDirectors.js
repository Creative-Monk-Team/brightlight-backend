let mongoose = require("mongoose");
let aboutUsDirectorsSchema = mongoose.Schema(
  {
    img: {
      type: String,
    },
    heading: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "Meet the Directors",
    },
    d1image: {
      type: String,
    },
    d1name: {
      type: String,
    },
    d1designation: {
      type: String,
    },
    d1description: {
      type: String,
    },
    d2image: {
      type: String,
    },
    d2name: {
      type: String,
    },
    d2designation: {
      type: String,
    },
    d2description: {
      type: String,
    },
    d3image: {
      type: String,
    },
    d3name: {
      type: String,
    },
    d3designation: {
      type: String,
    },
    d3description: {
      type: String,
    },
    d4image: {
      type: String,
    },
    d4name: {
      type: String,
    },
    d4designation: {
      type: String,
    },
    d4description: {
      type: String,
    },
    d5image: {
      type: String,
    },
    d5name: {
      type: String,
    },
    d5designation: {
      type: String,
    },
    d5description: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let aboutUsDirectorsSection = mongoose.model(
  "About Us Directors Section",
  aboutUsDirectorsSchema
);
module.exports = aboutUsDirectorsSection;
