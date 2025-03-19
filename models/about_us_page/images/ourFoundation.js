let mongoose = require("mongoose");
let ourFoundationSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let ourFoundationSchemaSection = mongoose.model(
  "Our Foundation Image",
  ourFoundationSchema
);
module.exports = ourFoundationSchemaSection;
