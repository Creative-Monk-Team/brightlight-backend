let mongoose = require("mongoose");
let weAreSmallSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let weAreSmallSection = mongoose.model(
  "We Are Small Screen Image",
  weAreSmallSchema
);
module.exports = weAreSmallSection;
