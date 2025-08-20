let mongoose = require("mongoose");
let educationCategorySchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default: "Express Entry – Category-Based Draw for Education Professionals (2025)",
    },
    description1: {
      type: String,
      default:
        "Canada has introduced category-based draws within the Express Entry system to attract skilled professionals in high-demand fields more effectively. One of these targeted streams is the Education category, specifically designed to invite teachers and early childhood educators who possess Canadian qualifications or their equivalents.",
    },
    description2: {
      type: String,
      default:
        "If you are an educator looking to establish a future in Canada, this new pathway might expedite your permanent residency process.",
    },

    whatIsHeading: {
      type: String,
      default: "What Is the Express Entry Education Category?",
    },
    whatIsPara: {
      type: String,
      default:
        "The Education category draw is part of the federal government’s Express Entry reform, which was introduced in 2023 and is actively used in 2024–2025. This draw allows Immigration, Refugees and Citizenship Canada (IRCC) to prioritize candidates who have work experience in specific National Occupational Classification (NOC) occupations related to education, such as elementary school teachers and early childhood educators. Candidates must still meet the basic eligibility criteria for any Express Entry-managed program, including the Federal Skilled Worker Program, the Canadian Experience Class, or the Federal Skilled Trades Program.",
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

    eligibilityExpressEntryHeading: {
      type: String,
      default: "Eligibility for Express Entry",
    },
    eligibilityExpressEntryPara: {
      type: String,
      default:
        "Before participating in a STEM-specific draw through Canada's Express Entry system, you need to confirm your eligibility. Here’s how you can get started:",
    },
    eligibilityExpressEntrySteps: {
      type: [String],
      default: [
        "Join the Express Entry Pool: The first step to becoming a candidate for a STEM-specific draw is to enter the Express Entry pool.",
        "Choose Your Program: There are three programs available for eligibility to join the Express Entry pool:",
        "A. Federal Skilled Worker Program (FSW): This program is ideal for tech workers who possess the necessary work experience, education, and language skills.",
        "B. Canadian Experience Class (CEC): Similar to the FSW program, the CEC is suitable for tech workers with Canadian work experience.",
        "C. Federal Skilled Trades Program (FSTP): Designed for trades workers, this program requires proof of relevant work experience, education, and language proficiency.",
        "Note: Each program has its specific eligibility requirements. Be sure to review these carefully to ensure you meet all necessary criteria before applying.",
      ],
    },

    eligibilityCriteriaHeading: {
      type: String,
      default: "Eligibility Criteria for program",
    },
    eligibilityCriteriaList: {
      type: [String],
      default: [
        "Be eligible under one of the three main Express Entry programs: Federal Skilled Worker Program (FSWP), Canadian Experience Class (CEC), or Federal Skilled Trades Program (FSTP).",
        "Have a minimum of six months of continuous work experience in a listed National Occupational Classification (NOC) occupation.",
        "Obtain this work experience within the past three years.",
        "Meet the minimum language proficiency level of Canadian Language Benchmark (CLB) 7.",
        "Have work experience in one of the eligible education-related occupations.",
        "Submit an Express Entry profile and await a targeted invitation.",
      ],
    },

    eligibleNOCCodesHeading: {
      type: String,
      default: "Eligible NOC Codes for the Education Category",
    },
    eligibleNOCCodesList: {
      type: [{ occupation: String, nocCode: String }],
      default: [
        { occupation: "Early childhood educators and assistants", nocCode: "42202" },
        { occupation: "Elementary school and kindergarten teachers", nocCode: "41221" },
        { occupation: "Secondary school teachers", nocCode: "41220" },
        { occupation: "Educational counsellors", nocCode: "41320" },
        { occupation: "Instructors of persons with disabilities", nocCode: "42203" },
        { occupation: "College and other vocational instructors", nocCode: "41210" },
        { occupation: "Other instructors (e.g., music, language, driving)", nocCode: "41200" },
      ],
    },
    eligibleNOCCodesNote: {
      type: String,
      default:
        "✔️ Candidates must demonstrate that they performed 51% or more of the main duties in the NOC description and match the lead statement.",
    },

    drawHistoryHeading: {
      type: String,
      default: "Express Entry Trade Occupations Draw History",
    },
    drawHistoryPara: {
      type: String,
      default:
        "In August 2023, the first Express Entry draw for Trade occupation workers (draw #261) had a CRS score of 388 and invited 1,500 candidates for category-based selection.",
    },

    howToApplyHeading: {
      type: String,
      default: "How to Apply for Express Entry Under the Education Category",
    },
    howToApplySteps: {
      type: [String],
      default: [
        "Check Your Eligibility: Confirm that you qualify under the Federal Skilled Worker Program, Canadian Experience Class, or Federal Skilled Trades Program.",
        "Create Your Express Entry Profile: Submit an Express Entry profile via the IRCC portal. Indicate your NOC and language scores.",
        "Wait for a Category-Based Invitation to Apply (ITA): If your profile matches the education category and your CRS score meets the threshold, you may receive an ITA in a future category-based draw.",
        "Submit Your PR Application: Once invited, submit your complete PR application within 60 days with all supporting documents.",
      ],
    },

    refusalHeading: {
      type: String,
      default: "Common Reasons for Refusals",
    },
    refusalList: {
      type: [String],
      default: [
        "Incomplete or inaccurate work experience details (e.g., missing duties or incorrect NOC match)",
        "CRS score inflated or miscalculated on profile",
        "Failure to meet CLB 7 in all language skill areas (reading, writing, speaking, listening)",
        "Documents not matching profile claims (e.g., reference letters missing key information)",
        "Incorrect or outdated educational credential assessments (ECA)",
        "Misrepresentation or omission of material facts in the Express Entry profile",
        "Missing police clearance or medical exam at the time of final submission",
        "Submitting experience not aligned with the listed eligible occupations",
        "Not responding to IRCC document requests or deadlines on time",
      ],
    },

    stillNotSureHeading: {
      type: String,
      default: "Still not sure?",
    },
    stillNotSurePara: {
      type: String,
      default:
        "Contact Brightlight Immigration today to evaluate your profile and begin your transformative journey toward achieving your Canadian dream. With over a decade of experience, we specialize in Express Entry Programs, boasting an approval rate of nearly 100%. Our success stems from our tailored approach, focusing on your unique circumstances. We leverage case law and identify similar cases with positive outcomes to set precedents for your application. This methodology contributes significantly to our high success rate. At Brightlight Immigration, our dedicated team of visa application specialists will assist you from the initial stages of the application process through to obtaining your visa. Start your process now!",
    },
    bookAppointmentText: {
      type: String,
      default: "Contact Us",
    },

    whyChooseUsHeading: {
      type: String,
      default: "Why Choose Us?",
    },
    whyChooseUsList: {
      type: [String],
      default: [
        "<strong>Experienced Team:</strong> Over a decade of experience in handling Immigration applications with a high success rate.",
        "<strong>Tailored Approach:</strong> Personalized services and strategies based on your specific case.",
        "<strong>High Success Rate:</strong> Proven track record using case law and precedents for positive results.",
        "<strong>Comprehensive Support:</strong> Assistance from the start of the application process to obtaining your PR.",
      ],
    },

    faq_heading: {
      type: String,
      default: "Frequently Asked Questions (FAQs)",
    },
    faqs: {
      type: [{ question: String, answer: String }],
      default: [
        {
          question: "Is this a separate immigration program?",
          answer: "No. It’s part of the existing Express Entry system but prioritizes candidates with work experience in select occupations.",
        },
        {
          question: "Do I need a job offer?",
          answer: "Not required, but it can improve your CRS score.",
        },
        {
          question: "Can I qualify if I have foreign teaching experience?",
          answer: "Yes, if your experience aligns with a listed NOC and meets Canadian equivalency through credential assessment.",
        },
        {
          question: "What is the average CRS score for education draws?",
          answer: "It varies by round but is generally lower than general draws, often between 430–470.",
        },
        {
          question: "Is certification or licensing required?",
          answer: "Not for Express Entry eligibility, but provincial certification may be required later for employment.",
        },
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

let educationCategorySection = mongoose.model(
  "Education Category Section",
  educationCategorySchema
);
module.exports = educationCategorySection;