let mongoose = require("mongoose");
let featuresSchema = mongoose.Schema(
  {
    feature1Heading: {
      type: String,
    },
    feature1Description: {
      type: String,
    },
    feature1SVG: {
      type: String,
    },
    feature2Heading: {
      type: String,
    },
    feature2Description: {
      type: String,
    },
    feature2SVG: {
      type: String,
    },
    feature3Heading: {
      type: String,
    },
    feature3Description: {
      type: String,
    },
    feature3SVG: {
      type: String,
    },
    feature4Heading: {
      type: String,
    },
    feature4Description: {
      type: String,
    },
    feature4SVG: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let featureSection = mongoose.model("Features Section", featuresSchema);
module.exports = featureSection;
