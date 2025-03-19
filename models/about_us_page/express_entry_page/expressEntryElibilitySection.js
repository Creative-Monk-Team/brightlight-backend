let mongoose = require("mongoose");
let expressEntryElibilitySchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: false,
      default: "About the Program",
    },
    description: {
      type: String,
      required: [true, "Please fill out this field"],
      default:
        "The Canadian Express Entry Program is a points-based system used by the Canadian government to select skilled workers for permanent residence. It's for those skilled individuals who can contribute to the country's economic growth. It is a swift and efficient way for qualified candidates to become permanent residents of Canada.",
    },
    eligibility1: {
      type: String,
      required: true,
      default: "FEDERAL SKILLED WORKER PROGRAM (FSWP)",
    },
    eligibility2: {
      type: String,
      required: true,
      default: "FEDERAL SKILLED WORKER PROGRAM (FSWP)",
    },
    eligibility3: {
      type: String,
      required: true,
      default: "FEDERAL SKILLED WORKER PROGRAM (FSWP)",
    },
  },
  {
    timeStamps: true,
  }
);

let expressEntryElibilitySection = mongoose.model(
  "Express Entry Eligibility Section",
  expressEntryElibilitySchema
);
module.exports = expressEntryElibilitySection;
