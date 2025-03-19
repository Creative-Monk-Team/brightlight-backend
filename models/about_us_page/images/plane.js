let mongoose = require("mongoose");
let planeSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let planeSection = mongoose.model(
  "Plane Image",
  planeSchema
);
module.exports = planeSection;
