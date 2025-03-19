let mongoose = require("mongoose");
let addingImmigrationToolsSchema = mongoose.Schema(
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

let addingImmigrationToolsSection = mongoose.model(
  "Adding Immigration Tools Section",
  addingImmigrationToolsSchema
);
module.exports = addingImmigrationToolsSection;
