let mongoose = require("mongoose");
let expressEntryTopSectionSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "Our achievements are continually growing",
    },
    description: {
      type: String,
      required: [true, "Please fill out this field"],
      default: "Our Achievement Description here",
    },
    quickAccessHeading: {
      type: String,
      required: true,
      default: "QUICK ACCESS",
    },
    linkHeading1: {
      type: String,
      required: false,
      default: "About the Program",
    },
    link1SectionLink: {
      type: "String",
      required: false,
      default: "#about-the-program",
    },
    linkHeading2: {
      type: String,
      required: false,
      default: "Eligibility",
    },
    link2SectionLink: {
      type: "String",
      required: false,
      default: "#eligibility",
    },
    linkHeading3: {
      type: String,
      required: false,
      default: "Advantages of Express Entry",
    },
    link3SectionLink: {
      type: "String",
      required: false,
      default: "#advantages-of-express-entry",
    },

    linkHeading4: {
      type: String,
      required: false,
      default: "Refusal Reasons",
    },
    link4SectionLink: {
      type: "String",
      required: false,
      default: "#refusal-reasons",
    },
    linkHeading5: {
      type: String,
      required: false,
      default: "Advantages of Express Entry",
    },
    link5SectionLink: {
      type: "String",
      required: false,
      default: "#advantages-of-express-entry",
    },
    linkHeading6: {
      type: String,
      required: false,
      default: "Advantages of Express Entry",
    },
    link6SectionLink: {
      type: "String",
      required: false,
      default: "#advantages-of-express-entry",
    },
    linkHeading7: {
      type: String,
      required: false,
      default: "Advantages of Express Entry",
    },
    link7SectionLink: {
      type: "String",
      required: false,
      default: "#advantages-of-express-entry",
    },
    linkHeading8: {
      type: String,
      required: false,
      default: "Advantages of Express Entry",
    },
    link8SectionLink: {
      type: "String",
      required: false,
      default: "#advantages-of-express-entry",
    },
    linkHeading9: {
      type: String,
      required: false,
      default: "Advantages of Express Entry",
    },
    link9SectionLink: {
      type: "String",
      required: false,
      default: "#advantages-of-express-entry",
    },
    linkHeading10: {
      type: String,
      required: false,
      default: "Advantages of Express Entry",
    },
    link10SectionLink: {
      type: "String",
      required: false,
      default: "#advantages-of-express-entry",
    },
  },
  {
    timeStamps: true,
  }
);

let expressEntryTopSection = mongoose.model(
  "Express Entry Top Section",
  expressEntryTopSectionSchema
);
module.exports = expressEntryTopSection;
