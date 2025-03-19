let mongoose = require("mongoose");
let aboutUsSocialPresenceSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "Our Social Presence",
    },
    description1: {
      type: String,
      required: [true, "Please fill out this field"],
      default:
        "Looking for the latest Canadian immigration news and insights? Want to see how we've helped past clients achieve their goals? Or maybe you just want some reassurance that we'll handle your case with care? Well, you're in luck! Our social media platforms are buzzing with all that and more.",
    },
    description2: {
      type: String,
      required: [true, "Please fill out this field"],
      default:
        "So, what are you waiting for? Head over to our social media pages, give us a follow, and join the conversation! We promise it'll be worth your time.",
    },
    findUsOnHeading: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "Find Us On",
    },
    instagramLink: {
      type: String,
      required: false,
      default: "instagram.com",
    },
    youtubeLink: {
      type: String,
      required: false,
      default: "yt.com",
    },
    facebookLink: {
      type: String,
      required: false,
      default: "fb.com",
    },
    googleMapsLink: {
      type: String,
      required: false,
      default: "google.com",
    },
  },
  {
    timeStamps: true,
  }
);

let aboutUsSocialPresenceSection = mongoose.model(
  "About Us Social Presence Section",
  aboutUsSocialPresenceSchema
);
module.exports = aboutUsSocialPresenceSection;
