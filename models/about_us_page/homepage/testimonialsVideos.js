let mongoose = require("mongoose");
let videosSchema = mongoose.Schema(
  {
    video1: {
      type: String,
    },
    video1name: {
      type: String,
    },
    video2: {
      type: String,
    },
    video2name: {
      type: String,
    },
    video3: {
      type: String,
    },
    video3name: {
      type: String,
    },
    video4: {
      type: String,
    },
    video4name: {
      type: String,
    },
    video5: {
      type: String,
    },
    video5name: {
      type: String,
    },
    video6: {
      type: String,
    },
    video6name: {
      type: String,
    },
    video7: {
      type: String,
    },
    video7name: {
      type: String,
    },
    video8: {
      type: String,
    },
    video8name: {
      type: String,
    },
    video9: {
      type: String,
    },
    video9name: {
      type: String,
    },
    video10: {
      type: String,
    },
    video10name: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

let videosSection = mongoose.model("Videos Section", videosSchema);
module.exports = videosSection;
