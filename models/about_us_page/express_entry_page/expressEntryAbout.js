let mongoose = require("mongoose");
let expressEntryAboutSchema = mongoose.Schema(
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
  },
  {
    timeStamps: true,
  }
);

let expressEntryAboutSection = mongoose.model(
  "Express Entry About Program Section",
  expressEntryAboutSchema
);
module.exports = expressEntryAboutSection;
