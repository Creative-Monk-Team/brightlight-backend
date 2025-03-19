let mongoose = require("mongoose");
let newsSectionSchema = mongoose.Schema(
  {
    heading: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

let newsSectionData = mongoose.model("News Section", newsSectionSchema);
module.exports = newsSectionData;
