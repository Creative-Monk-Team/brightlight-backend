let mongoose = require("mongoose");
let moreServicesCardSchema = mongoose.Schema(
  {
    blue_stroke_img: {
      type: String,
    },
    white_stroke_img: {
      type: String,
    },
    tool_name: {
      type: String,
    },
    tool_desc: {
      type: String,
    },
    tool_link: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

let moreServicesCardSection = mongoose.model(
  "More Services Card Section",
  moreServicesCardSchema
);
module.exports = moreServicesCardSection;
