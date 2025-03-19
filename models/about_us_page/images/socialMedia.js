let mongoose = require("mongoose");
let socialMediaSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let socialMediaSchemaSection = mongoose.model(
  "Social Media Image",
  socialMediaSchema
);
module.exports = socialMediaSchemaSection;
