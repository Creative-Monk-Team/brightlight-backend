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
        "A Temporary Resident Permit (TRP) is a legal document issued by Immigration, Refugees and Citizenship Canada (IRCC). It allows individuals who are otherwise inadmissible to Canada to enter or remain in the country for a limited time, provided they have specific and compelling reasons for doing so.",
    },

    seriousnessHeading: {
      type: String,
      default: "Why TRP Applications Must Be Taken Seriously",
    },

    seriousnessPara: {
      type: String,
      default:
        "TRP applications are not routine and should be treated as your last legal opportunity to regain legal status in Canada if your temporary resident status has expired and you have missed the 90-day window to apply for restoration of status. Time is of the essence, as any delays could lead to removal orders or bans on future entry. This is why it is crucial to have a licensed immigration professional handle your TRP application—there may not be a second chance.",
    },

    eligibilityHeading: {
      type: String,
      default: "Eligibility Criteria for Temporary Resident Permit",
    },

    eligibilityIntro: {
      type: String,
      default:
        "TRPs are granted when the benefits of allowing entry or residence in Canada outweigh potential risks. You must demonstrate that your reason for being in Canada is exceptionally compelling. Common examples include:",
    },

    eligibilityList: {
      type: [String],
      default: [
        "Urgent business meetings or work in a critical industry",
        "Attending a funeral or visiting a seriously ill relative",
        "Participating in legal proceedings",
        "Supporting Canadian family members in crisis",
        "Individuals with past inadmissibility due to medical, criminal, or security issues may still qualify if their cases are well-prepared and justified",
      ],
    },

    howToApplyHeading: {
      type: String,
      default: "How to Apply for a Temporary Resident Permit",
    },

    howToApplySteps: {
      type: [String],
      default: [
        "Provide strong justification and evidence for your purpose in Canada",
        "The application process varies by country of residence",
        "To prevent delays or refusals, consider working with a regulated immigration consultant",
      ],
    },

    refusalHeading: {
      type: String,
      default: "Common Reasons for TRP Refusal",
    },

    refusalList: {
      type: [String],
      default: [
        "You have a serious criminal record, including drug trafficking or violent crimes",
        "You pose a national security risk, such as involvement in espionage or terrorism",
        "You provided false or misleading information in your application",
        "You overstayed a previous visa or did not comply with immigration laws",
        "Your application does not adequately justify your need to be in Canada despite your inadmissibility",
        "Your supporting documents lack credibility or sufficient detail",
      ],
    },

    stillNotSureHeading: {
      type: String,
      default: "Still Not Sure?",
    },

    stillNotSurePara: {
      type: String,
      default:
        "If you've received a refusal, or if you're currently inadmissible, don’t panic. At Brightlight Immigration, we specialize in complex and refused immigration cases. We've helped many clients secure TRP approvals—even after multiple past rejections. We use a case-law-based approach tailored to the officer’s specific concerns, and we build your file using previous successful precedents. This is why we maintain a high success rate.",
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
        "Experienced Team: Over a decade of success handling complex immigration cases",
        "Tailored Approach: Every case is uniquely prepared based on officer concerns and prior refusals",
        "High Success Rate: We leverage legal strategies, precedents, and expert knowledge",
        "Comprehensive Support: End-to-end assistance through the entire TRP process",
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

const temporaryResidentPermSection = mongoose.model("Temporary Resident Permit (TRP) program", trpSchema);
module.exports = temporaryResidentPermSection;

