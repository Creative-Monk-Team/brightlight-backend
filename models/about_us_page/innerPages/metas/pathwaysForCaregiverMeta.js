let mongoose = require("mongoose");
let pathwaysForCaregiverMetaSchema = mongoose.Schema(
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

let pathwaysForCaregiverMetaSection = mongoose.model( "pathways For Caregiver Meta", pathwaysForCaregiverMetaSchema);
module.exports = pathwaysForCaregiverMetaSection;
