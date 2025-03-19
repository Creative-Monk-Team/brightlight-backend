let mongoose = require("mongoose");
let aboutUsFoundationSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "Our Foundation",
    },
    headline1: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "Creating continuous possibilities for your immigration goals.",
    },
    headline2: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "Make lasting connections with you based on trust.",
    },
    description1: {
      type: String,
      required: [true, "Please fill out this field"],
      default:
        "We're driven by a passion to create continuous possibilities for those who seek our guidance for Canadian immigration. We believe that immigration is not just about paperwork and procedures, it is about making the way for individuals to pursue their dreams, connect with loved ones or build a better future.",
    },
    description2: {
      type: String,
      required: [true, "Please fill out this field"],
      default:
        "Unlike some immigration agencies, we're dedicated to putting your interest first and providing personalized and tailored approach towards your query. We understand that each case is unique, and we take the time to understand your individual circumstances and goals. Our meticulous process ensures that your immigration journey is as smooth and successful as possible. Ultimately, our goal is to foster a lasting connection with our clients, built on trust and responsibility.",
    },
  },
  {
    timeStamps: true,
  }
);

let aboutUsFoundationSection = mongoose.model(
  "About Us Foundation Section",
  aboutUsFoundationSchema
);
module.exports = aboutUsFoundationSection;
