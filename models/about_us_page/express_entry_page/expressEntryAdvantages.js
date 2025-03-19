let mongoose = require("mongoose");
let expressEntryAdvantagesSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: false,
      default: "Advantages of Express Entry:",
    },
    description: {
      type: String,
      required: [true, "Please fill out this field"],
      default:
        "There are various immigration programs that you can apply through: FSWP, FSTP, CEC or category based.This means that you can choose the program that best suits your qualifications and experience.",
    },
    advantage1: {
      type: String,
      required: true,
      default: "Applications for Express Entry are accepted all year round.",
    },
    advantage2: {
      type: String,
      required: true,
      default:
        "Once you receive your permanent residency visa, you can settle anywhere in Canada.",
    },
    advantage3: {
      type: String,
      required: true,
      default:
        "After you have been physically present in Canada for at least 1,095 days (3 years) out of the last 5 years, you can apply for Canadian Citizenship.",
    },
  },
  {
    timeStamps: true,
  }
);

let expressEntryAdvantagesSection = mongoose.model(
  "Express Entry Advantages Section",
  expressEntryAdvantagesSchema
);
module.exports = expressEntryAdvantagesSection;
