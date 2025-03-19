let mongoose = require("mongoose");
let mapSchema = mongoose.Schema(
  {
    heading: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let mapSchemaSection = mongoose.model("Map Section", mapSchema);
module.exports = mapSchemaSection;
