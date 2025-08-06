const mongoose = require("mongoose");

const flagpolingSchema = mongoose.Schema(
  {
    programStatus: {
      type: String,
      default: "Program is no longer Open - ended on December 23, 2024",
    },

    heading: {
      type: String,
      default: "Flagpoling – Quick and Legal Re-Entry for Permit Renewal",
    },

    aboutHeading: {
      type: String,
      default: "About the Program",
    },
    aboutPara: {
      type: String,
      default:
        "Flagpoling is a legal method to exit and re-enter Canada (without entering the U.S.) to update your immigration status. It’s commonly used for renewing temporary residence permits or finalizing permanent residency at a port of entry.",
    },

    benefitsHeading: {
      type: String,
      default: "Benefits of Flagpoling",
    },
    benefitsList: {
      type: [String],
      default: [
        "Faster than online or paper-based applications (which take weeks/months)",
        "Simple process—present your passport and documents at the port of entry",
        "Often processed on the spot by CBSA officers",
        "CBSA may consider humanitarian or compassionate factors during evaluation",
      ],
    },

    eligibilityHeading: {
      type: String,
      default: "Eligibility Criteria for Flagpoling",
    },
    eligibilityList: {
      type: [String],
      default: [
        "You must currently hold a valid visitor, study, or work permit",
        "If your status has expired, you must have applied for an extension online and carry proof",
        "Do not attempt flagpoling if your status is expired and you’ve only applied for restoration",
        "You must meet all IRCC requirements for the new permit you are applying for",
        "Carry original documents when attending your interview with CBSA",
      ],
    },

    importantTipHeading: {
      type: String,
      default: "Important Tip",
    },
    importantTipPara: {
      type: String,
      default:
        "While flagpoling is convenient, there are risks like being denied entry at either border, potentially resulting in removal to your home country. Be prepared for detailed interviews with border officers.",
    },

    ctaHeading: {
      type: String,
      default: "Still Not Sure?",
    },
    ctaPara: {
      type: String,
      default:
        "To minimize risks and ensure success, hire a Regulated Canadian Immigration Consultant (RCIC). Brightlight Immigration can represent you at any Point of Entry in the Lower Mainland, BC, offering guidance and support throughout the process.",
    },

    bookAppointment: {
      type: String,
      default: "Book Appointment",
    },

    whyChooseUsHeading: {
      type: String,
      default: "Why Choose Us?",
    },
    whyChooseUsList: {
      type: [String],
      default: [
        "Experienced representation at ports of entry",
        "Personalized guidance and documentation support",
        "Preparation for interviews with CBSA officers",
        "Proven success and client satisfaction",
      ],
    },

    showTestimonials: {
      type: String,
      default: "Y", // Toggle: "Y" to show, "N" to hide
    },

    showVideoTestimonials: {
      type: String,
      default: "Y",
    },

    showWrittenTestimonials: {
      type: String,
      default: "Y",
    },

    faqHeading: {
      type: String,
      default: "FAQs Made Simple",
    },
    faqs: {
      type: [
        {
          question: String,
          answer: String,
        },
      ],
      default: [
        {
          question: "Is Flagpoling Legal in Canada?",
          answer:
            "Yes, it is a legal method recognized by IRCC for certain immigration-related updates.",
        },
        {
          question: "What Are the Risks of Flagpoling?",
          answer:
            "You may be denied entry into Canada or the U.S. In rare cases, you may be removed from Canada. Interviews with CBSA or U.S. border officials are usually required.",
        },
        {
          question: "Do I Need a U.S. Visa to Flagpole?",
          answer: "No, a U.S. visitor visa is not required to flagpole.",
        },
        {
          question: "Can I Flagpole if I Am Out of Status?",
          answer:
            "No. It's highly discouraged. You must have valid or implied status before flagpoling.",
        },
        {
          question: "Do I Need to Make an Appointment to Flagpole?",
          answer:
            "Yes, some border points in the Lower Mainland require appointments. Check with our office for current guidelines.",
        },
        {
          question: "What Documents Are Required to Flagpole?",
          answer:
            "Documents depend on your situation (work permit, study permit, etc.). Contact our office for a tailored checklist.",
        },
      ],
    },

    showBlogs: {
      type: String,
      default: "Y",
    },
    showEligibilityAssessment: {
      type: String,
      default: "Y",
    },
  },
  {
    timestamps: true,
  }
);

const Flagpoling = mongoose.model("Flagpoling Program", flagpolingSchema);
module.exports = Flagpoling;
