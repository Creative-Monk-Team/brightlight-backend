let mongoose = require("mongoose");
let moreServicesSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default: "What We Do",
    },
    description: {
      type: String,
      default:
        "Bright Light Immigration Inc. is a trusted immigration consulting firm based in Vancouver, serving Globally. We provide comprehensive services to individuals seeking to immigrate to Canada.",
    },
    read_more: {
      type: String,
      default: "Read More"
    }
  },
  {
    timeStamps: true,
  }
);

let moreServicesSection = mongoose.model(
  "More Services Section",
  moreServicesSchema
);
module.exports = moreServicesSection;
