let mongoose = require("mongoose");
let expressEntryRefusalReasonsSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: false,
      default:
        "Don't forget to avoid these common Express Entry refusal reasons and increase your chances of approval.",
    },
    refusal1: {
      type: String,
      required: true,
      default:
        "You selected an incorrect National Occupational Classification (NOC) code for your application.",
    },
    refusal2: {
      type: String,
      required: true,
      default:
        "You do not meet the minimum requirements for Express Entry, including age, education, work experience, language proficiency, and settlement funds.",
    },
    refusal3: {
      type: String,
      required: true,
      default:
        "Inaccurate and incomplete information about your education, work experience, family members, and previous immigration history.",
    },
    refusal4: {
      type: String,
      required: true,
      default:
        "Missing essential documents, such as police clearances, educational assessments, language test results, work experience verification letters, reference letters etc.",
    },
    refusal5: {
      type: String,
      required: true,
      default:
        "You failed to submit your Express Entry application within 60 days of receiving an Invitation to Apply (ITA).",
    },
  },
  {
    timeStamps: true,
  }
);

let expressEntryRefusalReasonsSection = mongoose.model(
  "Express Entry Refusal Reasons Section",
  expressEntryRefusalReasonsSchema
);
module.exports = expressEntryRefusalReasonsSection;
