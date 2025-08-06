const mongoose = require("mongoose");

const rcipSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default: "RCIP – Rural Community Immigration Pilot (2025)",
    },

    introPara: {
      type: String,
      default:
        "Canada has introduced the RCIP to attract skilled immigrants to smaller towns and rural areas with labor shortages. This program supports economic growth and community stability beyond major cities.",
    },

    benefitsHeading: {
      type: String,
      default: "Benefits of the RCIP Program",
    },

    benefitsList: {
      type: [String],
      default: [
        "Live and work in affordable, high-demand communities",
        "Faster processing times than many provincial nomination streams",
        "Access to community-based newcomer support",
        "Open to a wide range of skilled occupations",
        "Employers actively assist with immigrant settlement",
      ],
    },

    eligibilityHeading: {
      type: String,
      default: "RCIP Eligibility Criteria",
    },

    eligibilityList: {
      type: [String],
      default: [
        "Valid job offer from a participating rural employer",
        "CLB 5 for NOC TEER 0, 1, 2; CLB 4 for TEER 3, 4, 5",
        "At least 1 year of full-time work experience in the past 3 years",
        "Minimum of a high school diploma (foreign education requires ECA)",
        "Sufficient settlement funds for self and dependents",
        "Intent to live and work in the designated community",
        "Meet any additional community-specific requirements",
      ],
    },

    provincesHeading: {
      type: String,
      default: "Participating Provinces and Eligible Communities (2025)",
    },

    provincesList: {
      type: [
        {
          province: String,
          communities: [String],
        },
      ],
      default: [
        {
          province: "Alberta",
          communities: ["Cold Lake", "Brooks", "Peace River"],
        },
        {
          province: "British Columbia",
          communities: ["Quesnel", "Terrace", "Cranbrook"],
        },
        {
          province: "Manitoba",
          communities: ["Steinbach", "Brandon", "Neepawa"],
        },
        {
          province: "New Brunswick",
          communities: ["Miramichi", "Campbellton", "Woodstock"],
        },
        {
          province: "Newfoundland & Labrador",
          communities: ["Corner Brook", "Gander"],
        },
        {
          province: "Nova Scotia",
          communities: ["New Glasgow", "Bridgewater"],
        },
        {
          province: "Ontario",
          communities: ["Timmins", "Kenora", "Owen Sound", "North Bay"],
        },
        {
          province: "Prince Edward Island",
          communities: ["Summerside", "Montague"],
        },
        {
          province: "Saskatchewan",
          communities: ["Swift Current", "Moose Jaw", "Yorkton"],
        },
      ],
    },

    howToApplyHeading: {
      type: String,
      default: "How to Apply for RCIP",
    },

    howToApplySteps: {
      type: [String],
      default: [
        "Step 1: Confirm Your Eligibility – meet all program criteria",
        "Step 2: Secure a Job Offer – full-time, non-seasonal, in a listed community",
        "Step 3: Obtain a Community Recommendation – from the local RCIP coordinator",
        "Step 4: Submit Your PR Application – complete with all supporting documents",
        "Step 5: Wait for Approval & Move – relocate and begin life in your new community",
      ],
    },

    refusalHeading: {
      type: String,
      default: "Common Reasons for Refusal",
    },

    refusalList: {
      type: [String],
      default: [
        "Seasonal or part-time job offers",
        "Employer not participating in the program",
        "Unverifiable or insufficient work experience",
        "Incomplete community recommendation",
        "Failure to meet CLB requirement",
        "Lack of settlement funds",
        "Unassessed foreign education credentials",
        "Applying for a non-designated community",
        "Lack of clear intent to live in the rural community",
        "Misrepresentation or inconsistent documents",
      ],
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
        "Experienced Team: Over a decade of successful immigration cases",
        "Tailored Approach: Personalized strategies for every case",
        "High Success Rate: Track record of approvals using case law and precedents",
        "Comprehensive Support: From eligibility to PR approval",
      ],
    },

    faqHeading: {
      type: String,
      default: "Frequently Asked Questions (FAQs)",
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
          question: "Is RCIP the same as RNIP?",
          answer: "No, RCIP is a new national initiative that builds on the RNIP model with updated communities and criteria.",
        },
        {
          question: "Can I apply without a job offer?",
          answer: "No, you must have a valid job offer from a participating employer.",
        },
        {
          question: "Can I include my family in the PR application?",
          answer: "Yes, spouses and dependent children can be included in the same application.",
        },
        {
          question: "Are healthcare jobs eligible?",
          answer: "Yes, many communities seek nurses, PSWs, and healthcare aides.",
        },
        {
          question: "Is there an age limit?",
          answer: "There’s no formal age limit, but younger applicants may score better in points-based systems.",
        },
        {
          question: "Can I switch communities after applying?",
          answer: "No, you must remain in the community that recommended you.",
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
    showTestimonials: {
      type: String,
      default: "Y",
    },
  },
  {
    timestamps: true,
  }
);

const RCIP = mongoose.model("RCIP Program", rcipSchema);
module.exports = RCIP;
