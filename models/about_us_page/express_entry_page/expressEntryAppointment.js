let mongoose = require("mongoose");
let expressEntryAppointmentSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: false,
      default: "In case",
    },
    description: {
      type: String,
      required: true,
      default:
        "You have received a refusal for any of the reasons mentioned above or having doubts regarding your case and application, do not worry. With over a decade of experience, we specialize in handling Express Entry Programs. Our approval rate for these programs are near to 100%. We achieve this with a tailored approach to your specific case. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate. At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your PR. Start your process now.",
    },
    drawHistoryLinkHeading: {
      type: String,
      required: true,
      default: "Express Entry Draws Entry",
    },
    drawsHistoryLink: {
      type: String,
      required: true,
      default: "/pages/draws-history",
    },
    appointmentLinkName: {
      type: String,
      required: true,
      default: "Book an Appointment",
    },
    appointmentLink: {
      type: String,
      required: true,
      default: "/pages/appointment",
    },
  },
  {
    timeStamps: true,
  }
);

let expressEntryAppointmentSection = mongoose.model(
  "Express Entry Appointment Section",
  expressEntryAppointmentSchema
);
module.exports = expressEntryAppointmentSection;
