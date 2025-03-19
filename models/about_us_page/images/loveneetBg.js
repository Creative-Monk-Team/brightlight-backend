let mongoose = require("mongoose");
let loveneetBgSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let loveneetBgSection = mongoose.model("Loveneet Bg Image", loveneetBgSchema);
module.exports = loveneetBgSection;
