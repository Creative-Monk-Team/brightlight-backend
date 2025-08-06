const mongoose = require("mongoose");

const educationOccupationSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default: "Express Entry – Category-Based Draw for Education Professionals (2025)",
    },
    subHeading: {
      type: String,
      default:
        "Canada now targets teachers and early childhood educators through specialized Express Entry draws, expediting their pathway to permanent residency.",
    },

    whatIsHeading: {
      type: String,
      default: "What Is the Express Entry Education Category?",
    },
    whatIsPara: {
      type: String,
      default:
        "The Education category draw allows IRCC to prioritize candidates with work experience in key teaching and education roles, including elementary and early childhood education, under specific NOC codes.",
    },

    benefitsHeading: {
      type: String,
      default: "Benefits of Applying Under the Education Category",
    },
    benefitsList: {
      type: [String],
      default: [
        "Accelerated PR (Permanent Residency) invitations through targeted draws",
        "Competitive CRS (Comprehensive Ranking System) cut-off scores compared to general draws",
        "Tailored for in-demand teaching professionals",
        "Acknowledges experience in early childhood and K–12 education",
        "Facilitates future integration into Canadian communities and labor markets",
      ],
    },

    eligibilityHeading: {
      type: String,
      default: "Eligibility for Express Entry",
    },
    eligibilitySteps: {
      type: [String],
      default: [
        "Join the Express Entry Pool",
        "Choose a Program: FSW, CEC, or FSTP",
        "Ensure minimum six months of recent work experience in an eligible NOC",
        "Meet CLB 7 language level",
        "Submit your profile and await an invitation",
      ],
    },

    eligibleNocHeading: {
      type: String,
      default: "Eligible NOC Codes for the Education Category",
    },
    eligibleNocs: {
      type: [
        {
          title: String,
          noc: String,
        },
      ],
      default: [
        { title: "Early childhood educators and assistants", noc: "42202" },
        { title: "Elementary school and kindergarten teachers", noc: "41221" },
        { title: "Secondary school teachers", noc: "41220" },
        { title: "Educational counsellors", noc: "41320" },
        { title: "Instructors of persons with disabilities", noc: "42203" },
        { title: "College and other vocational instructors", noc: "41210" },
        { title: "Other instructors (e.g., music, language, driving)", noc: "41200" },
      ],
    },

    applicationProcessHeading: {
      type: String,
      default: "How to Apply for Express Entry Under the Education Category",
    },
    applicationSteps: {
      type: [String],
      default: [
        "Step 1: Check Your Eligibility – qualify under FSWP, CEC, or FSTP",
        "Step 2: Create Your Express Entry Profile – submit through IRCC portal with NOC and language scores",
        "Step 3: Wait for a Category-Based ITA – match education NOC and meet CRS cut-off",
        "Step 4: Submit Your PR Application – apply within 60 days with documents",
      ],
    },

    commonRefusalHeading: {
      type: String,
      default: "Common Reasons for Refusals",
    },
    refusalReasons: {
      type: [String],
      default: [
        "Incomplete or inaccurate work experience details",
        "Inflated or miscalculated CRS score",
        "CLB 7 not met in all four language skills",
        "Mismatch between documents and profile",
        "Outdated or incorrect ECA (Educational Credential Assessment)",
        "Misrepresentation or omissions",
        "Missing police or medical clearances",
        "Experience not aligned with eligible NOC",
        "Failure to respond to IRCC deadlines",
      ],
    },

    ctaHeading: {
      type: String,
      default: "Still not sure?",
    },
    ctaPara: {
      type: String,
      default:
        "Brightlight Immigration will assess your eligibility, guide you through the process, and build a strong application using case precedents and a personalized strategy.",
    },

    whyChooseUsHeading: {
      type: String,
      default: "Why Choose Us?",
    },
    whyChooseUsList: {
      type: [String],
      default: [
        "Experienced Team: Over a decade handling immigration cases",
        "Tailored Approach: Custom strategies for each applicant",
        "High Success Rate: Nearly 100% approval using proven methods",
        "Comprehensive Support: From start to final PR approval",
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
          question: "Is this a separate immigration program?",
          answer: "No. It’s part of the existing Express Entry system but prioritizes candidates with education-related experience.",
        },
        {
          question: "Do I need a job offer?",
          answer: "Not required, but it can help increase your CRS score.",
        },
        {
          question: "Can I qualify if I have foreign teaching experience?",
          answer: "Yes, as long as it matches a listed NOC and is supported by an educational credential assessment (ECA).",
        },
        {
          question: "What is the average CRS score for education draws?",
          answer: "It varies, but usually ranges between 430–470 and is lower than general draws.",
        },
        {
          question: "Is certification or licensing required?",
          answer: "Not for Express Entry eligibility, but provincial certification may be needed for employment.",
        },
      ],
    },

    show_testimonials: {
      type: String,
      default: "N",
    },
  },
  {
    timestamps: true,
  }
);

const EducationOccupation = mongoose.model(
  "Education Occupation",
  educationOccupationSchema
);
module.exports = EducationOccupation;
