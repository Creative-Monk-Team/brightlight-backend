let mongoose = require("mongoose");
let ourVisionSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let ourVisionSchemaSection = mongoose.model(
  "Our Vison Image",
  ourVisionSchema
);
module.exports = ourVisionSchemaSection;
