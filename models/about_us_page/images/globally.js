let mongoose = require("mongoose");
let globallySchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let globallySchemaSection = mongoose.model("Globally Image", globallySchema);
module.exports = globallySchemaSection;
