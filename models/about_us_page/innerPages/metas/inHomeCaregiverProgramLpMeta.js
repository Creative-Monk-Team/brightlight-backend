let mongoose = require("mongoose");
let inHomeCaregiverProgramLpMetaSchema = mongoose.Schema(
  {
    metaTitle: {
      type: String,
      default: "Brightlight Immigration",
    },
    metaDesc: {
      type: String,
      default: "Brightlight Immigration",
    },
    metaOgTitle: {
      type: String,
      default: "Brightlight Immigration",
    },
    metaOgDesc: {
      type: String,
      default: "Brightlight Immigration",
    },
    metaKeywords: {
      type: String,
      default: "Brightlight Immigration",
    }
  },
  {
    timestamps: true,
  }
);

let inHomeCaregiverProgramLpMetaSection = mongoose.model("In Home Caregiver Program Lp Meta", inHomeCaregiverProgramLpMetaSchema);
module.exports = inHomeCaregiverProgramLpMetaSection;
