let mongoose = require("mongoose");
let immigrationToolsSchema = mongoose.Schema(
  {
    subHeading: {
      type: String,
      default: "Canada immigration Assessment Form",
    },
    heading: {
      type: String,
      default: "Immigration Tools",
    },
    description: {
      type: String,
      default:
        "These immigration tools will help you understand the immigration process and what you need to do obtain a Canadian visa.",
    },
  },
  {
    timeStamps: true,
  }
);

let immigrationToolsSection = mongoose.model(
  "Immigration Tools Section",
  immigrationToolsSchema
);
module.exports = immigrationToolsSection;
