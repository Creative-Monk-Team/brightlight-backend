let mongoose = require("mongoose");
let ourPillarsSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let ourPillarsSchemaSection = mongoose.model(
  "Our Pillars Image",
  ourPillarsSchema
);
module.exports = ourPillarsSchemaSection;
