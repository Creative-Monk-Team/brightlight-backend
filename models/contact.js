let mongoose = require("mongoose");
let contactSchema = mongoose.Schema(
  {
    page_heading: {
      type: String,
    },
    form_section_heading: {
      type: String,
    },
    form_section_description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

let contactSection = mongoose.model("Contact Section", contactSchema);
module.exports = contactSection;
