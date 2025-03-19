let mongoose = require("mongoose");
let testimonialsSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default: "Our Process",
    },
    googleRatings: {
      type: String,
    },
    review1img: {
      type: String,
    },
    review1text: {
      type: String,
    },
    review1name: {
      type: String,
    },
    review1star: {
      type: String,
    },
    review2img: {
      type: String,
    },
    review2text: {
      type: String,
    },
    review2name: {
      type: String,
    },
    review2star: {
      type: String,
    },
    review3img: {
      type: String,
    },
    review3text: {
      type: String,
    },
    review3name: {
      type: String,
    },
    review3star: {
      type: String,
    },
    review4img: {
      type: String,
    },
    review4text: {
      type: String,
    },
    review4name: {
      type: String,
    },
    review4star: {
      type: String,
    },
    review5img: {
      type: String,
    },
    review5text: {
      type: String,
    },
    review5name: {
      type: String,
    },
    review5star: {
      type: String,
    },
    review6img: {
      type: String,
    },
    review6text: {
      type: String,
    },
    review6name: {
      type: String,
    },
    review6star: {
      type: String,
    },
    review7img: {
      type: String,
    },
    review7text: {
      type: String,
    },
    review7name: {
      type: String,
    },
    review7star: {
      type: String,
    },
    review8img: {
      type: String,
    },
    review8text: {
      type: String,
    },
    review8name: {
      type: String,
    },
    review8star: {
      type: String,
    },
    review9img: {
      type: String,
    },
    review9text: {
      type: String,
    },
    review9name: {
      type: String,
    },
    review9star: {
      type: String,
    },
    review10img: {
      type: String,
    },
    review10text: {
      type: String,
    },
    review10name: {
      type: String,
    },
    review10star: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let testimonialsSection = mongoose.model(
  "Testimonials Section",
  testimonialsSchema
);
module.exports = testimonialsSection;
