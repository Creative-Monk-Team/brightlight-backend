let mongoose = require("mongoose");
let newsSchema = mongoose.Schema(
  {
    heading: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let newsSection = mongoose.model("News Section", newsSchema);
module.exports = newsSection;
