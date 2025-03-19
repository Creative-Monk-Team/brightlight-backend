let mongoose = require("mongoose");
let bestChoiceSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let bestChoiceSection = mongoose.model(
  "Best Choice Image",
  bestChoiceSchema
);
module.exports = bestChoiceSection;
