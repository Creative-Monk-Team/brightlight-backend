const mongoose = require("mongoose");

const trpSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default: "Temporary Resident Permit (TRP)",
    },

    introPara: {
      type: String,
      default:
        "A Temporary Resident Permit (TRP) is a legal document issued by IRCC that allows individuals who are otherwise inadmissible to enter or remain in Canada for a limited time, provided they have specific and compelling reasons.",
    },

    seriousnessHeading: {
      type: String,
      default: "Why TRP Applications Must Be Taken Seriously",
    },

    seriousnessPara: {
      type: String,
      default:
        "TRP applications are often a last legal opportunity to regain or maintain status in Canada. They are vital if your temporary resident status has expired and you’ve missed the 90-day window for restoration. Delays can result in removal orders or bans, so legal assistance is highly recommended.",
    },

    eligibilityHeading: {
      type: String,
      default: "Eligibility Criteria for Temporary Resident Permit",
    },

    eligibilityIntro: {
      type: String,
      default:
        "TRPs are only granted when the benefits of permitting someone into or keeping them in Canada outweigh the associated risks. Applicants must present a compelling case. Common qualifying situations include:",
    },

    eligibilityList: {
      type: [String],
      default: [
        "Urgent business meetings or critical work assignments",
        "Attending funerals or visiting seriously ill relatives",
        "Participation in legal proceedings",
        "Providing support to Canadian family members in crisis",
        "Inadmissibility due to criminal, medical, or security issues (if justified)",
      ],
    },

    howToApplyHeading: {
      type: String,
      default: "How to Apply for a Temporary Resident Permit",
    },

    howToApplySteps: {
      type: [String],
      default: [
        "Clearly document your reason for entering or staying in Canada",
        "Directly address the grounds for inadmissibility in your application",
        "Include strong supporting evidence and justification",
        "Note that the process may vary based on your country of residence",
        "Consider working with a regulated immigration consultant to avoid errors and delays",
      ],
    },

    refusalHeading: {
      type: String,
      default: "Common Reasons for TRP Refusal",
    },

    refusalList: {
      type: [String],
      default: [
        "Criminal record involving violence or drug trafficking",
        "Perceived threat to national security (e.g., espionage, terrorism)",
        "False or misleading information submitted",
        "Previous immigration violations (e.g., overstaying, non-compliance)",
        "Inadequate justification despite inadmissibility",
        "Lack of credible or sufficient supporting documentation",
      ],
    },

    stillNotSureHeading: {
      type: String,
      default: "Still Not Sure?",
    },

    stillNotSurePara: {
      type: String,
      default:
        "If you’ve been refused or are currently inadmissible, don’t panic. Brightlight Immigration specializes in complex and rejected cases. We use case law and past successful precedents to build compelling TRP applications with high success rates.",
    },

    bookAppointmentText: {
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
        "Experienced Team: Over a decade of handling complex immigration matters",
        "Tailored Approach: Each case is built with unique officer concerns in mind",
        "High Success Rate: Legal strategies and precedents that work",
        "Comprehensive Support: Full-service guidance from consultation to approval",
      ],
    },

    showTestimonials: {
      type: String,
      default: "Y",
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

const TRPProgram = mongoose.model("TRP Program", trpSchema);
module.exports = TRPProgram;
