let mongoose = require("mongoose");
let francophoneMobilitySchema = mongoose.Schema(
  {
    FrancophoneHeading: {
      type: String,
      default: "Francophone Mobility Program – NO LMIA Required (updated July, 2025)",
    },
    FrancophonePara: {
      type: String,
      default:
        "This type of LMIA (Labour Market Impact Assessment) permits employers to hire foreign workers for jobs in farms, nurseries, or greenhouses. The positions may involve operating agricultural machinery, as well as caring for and breeding animals, and planting and harvesting various crops, trees, and sod.",
    },

    BenefitsHeading: {
      type: String,
      default: "Benefits of Francophone Mobility Program",
    },
    BenefitsSubHeading: {
      type: String,
      default:
        "The Francophone Mobility Program offers a pathway for foreign workers seeking employment in Canada, promoting French-speaking talent outside of Quebec and providing unique advantages:",
    },
    BenefitsList: {
      type: [String],
      default: [
        "No LMIA Required: The Mobilité Francophone stream under the International Mobility Program allows employers to hire foreign workers without a Labour Market Impact Assessment (LMIA), eliminating recruitment and training requirements for Canadians. The $1,000 application fee is waived.",
        "Eligibility Without Borders: This program is open to workers of any nationality and age, without the restrictions seen in the International Experience Canada (IEC) Program.",
        "Language Flexibility: Although the program promotes French-speaking workers, employers do not have to communicate in French or conduct work in that language.",
        "TEER Skill Levels: All TEER skill level occupations (0-3) are eligible to apply, except for primary agricultural work. Previously, Teer 4-5 was also included. But under the update on June16, 2025 it has now been removed.",
        "Stream Evolution: Eligibility is now linked to public policy related to Canada’s academic institutions or economy, rather than cultural or social benefits.",
      ],
    },

    EligibilityHeading: {
      type: String,
      default: "Eligibility Criteria for Francophone Mobility Program",
    },
    EligibilitySubHead: {
      type: String,
      default: "To qualify for Mobilité Francophone, applicants must meet the following conditions:",
    },
    EligibilityList: {
      type: [String],
      default: [
        "Job Offer: Issue a job offer at a reasonable wage rate within the province of work",
        "LMIA Exempt Code: Request the LMIA exempt code for the job offer and work permit application. Employer compliance fee is $230.",
        "TEER Categories Restricted: After the temporary expansion expired on June 16, 2025, the program now allows only TEER 0–3 occupations once again. Previously, TEER 4–5 had also been included during the expansion",
        "French Language Requirements Updated",
      ],
    },
    FrenchLanguageSubList: {
      type: [String],
      default: [
        "Language Proficiency Bumped Up: As of June 16, 2025, IRCC has reverted to stricter criteria: CLB/NCLC level 7 in French speaking and listening is now required—up from the previous level 5—aligning with Canada’s long-term Francophone strategy",
        "Exemptions and Other Proof Accepted: Applicants with French-language post-secondary education (e.g., transcripts or diplomas) still may be exempt from standardized testing if documentation clearly demonstrates proficiency",
      ],
    },

    EmpReqHeading: {
      type: String,
      default: "Employer Requirements for the Francophone Mobility Program",
    },
    EmpReqList: {
      type: [String],
      default: [
        "Issuing a Job Offer: Provide a job offer at a reasonable wage rate based on the province where the work will take place.",
        "LMIA Exempt Code: Request the LMIA (Labour Market Impact Assessment) exempt code necessary for the job offer and work permit application. Note that there is an employer compliance fee of $230.",
        "Proof of Operations: Submit evidence of business operations, including payroll records and income statements, to support the hiring decision and the specific position.",
        "Work Location Identification: Clearly identify the work location associated with the job offer for the foreign worker.",
      ],
    },

    WorkPerDurHeading: {
      type: String,
      default: "Work Permit Duration for Francophone Mobility Program",
    },
    WorkPerDurSubHead: {
      type: String,
      default:
        "Work Permit Duration for Francophone Mobility Program Under the C16 LMIA exempt permit code, the work permit duration is determined by whichever of the following dates comes earlier:",
    },
    WorkPerDurList: {
      type: [String],
      default: [
        "The expiration date of the foreign worker’s passport OR",
        "The duration specified in the job offer issued by the employer.",
      ],
    },

    FamilyMemHeading: {
      type: String,
      default: "Family Members and Dependents for Francophone Mobility Program",
    },
    FamilyMemSubHead: {
      type: String,
      default: "For the Francophone Mobility Program, family members and dependents have specific options:",
    },
    FamilyMemList: {
      type: [String],
      default: [
        "Dependent Children: Can apply for study permits.",
        "Spouses and Common-Law Partners: Eligible for a spousal open work permit, valid for the duration of the main applicant’s work permit.",
      ],
    },

    AppProHeading: {
      type: String,
      default: "Application Process for Francophone Mobility Program",
    },
    AppProSubHead1: {
      type: String,
      default: "Job Search:",
    },
    AppProSubHead1List: {
      type: [String],
      default: [
        "Identify Opportunities: Use specialized job platforms and the LinkedIn network to find job offers that match your profile in regions outside of Quebec.",
        "Tip: Customize your search by applying filters for TEER 0 to TEER 3 positions and indicate your preference for French language requirements. Please note that agriculture jobs are not included under this program.",
      ],
    },
    AppProSubHead2: {
      type: String,
      default: "Preparing Your Application:",
    },
    AppProSubHead2List: {
      type: [String],
      default: [
        "Customize your CV and cover letter to the Canadian format, emphasizing your fluency in French and relevant professional experience.",
        "Tip: Provide specific examples of your professional achievements to demonstrate your value to potential Canadian employers.",
      ],
    },
    AppProSubHead3: {
      type: String,
      default: "File Submission:",
    },
    AppProSubHead3List: {
      type: [String],
      default: [
        "Eligibility Criteria: Before submitting your application, make sure you meet all eligibility requirements.",
        "Necessary Documents: Gather essential documents, which should include proof of language proficiency, professional qualifications, and a valid job offer.",
        "Tip: Thoroughly review your application to prevent any errors or omissions that could delay or jeopardize the process.",
      ],
    },

    WorkPerRenHeading: {
      type: String,
      default: "Work Permit Renewals for the Mobilité Francophone Stream",
    },
    WorkPerRenSubHead: {
      type: String,
      default: "If you currently hold a work permit issued through the Mobilité Francophone stream, you can easily renew it. Here’s how:",
    },
    WorkPerRenList: {
      type: [String],
      default: [
        "Renewals can be submitted by mail or online. Existing permits under the discontinued 'Significant Benefit – Francophone Destined to Work Outside of Quebec' category can be renewed through Mobilité Francophone.",
      ],
    },

    StillNotSureHeading: {
      type: String,
      default: "Still Not Sure?",
    },
    StillNotSurePara: {
      type: String,
      default:
        "If you've received a refusal for any reason, don't worry. With over a decade of experience, we specialize in previously refused cases. While we don’t provide jobs for LMIA, we can assist if you have a job offer. Our tailored approach has helped clients with multiple refusals, addressing all concerns and using case law as precedents for high success rates. At Brightlight Immigration, our dedicated team can guide you through the entire visa application process. Start your application today!",
    },

    WhyChooseUsHeading: {
      type: String,
      default: "Why Choose Us?",
    },
    WhyChooseUsList: {
      type: [String],
      default: [
        "Experienced Team: Over a decade of experience in handling Immigration applications with a high success rate.",
        "Tailored Approach: Personalized services and strategies based on your specific case.",
        "High Success Rate: Proven track record using case law and precedents for positive results.",
        "Comprehensive Support: Assistance from the start of the application process to obtaining your PR.",
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
          question: "Can I Apply if My Profession Isn’t in TEER Levels 0 to 3?",
          answer:
            "As of June 16, 2025, the program is restricted to TEER Levels 0 to 3, excluding primary agriculture. TEER 4-5 occupations are no longer eligible after the temporary expansion ended.",
        },
        {
          question: "What Level of French Proficiency is Required?",
          answer:
            "As of June 16, 2025, a CLB/NCLC level 7 in French speaking and listening is required. You can demonstrate this through a recognized language test like TEF or TCF, or provide proof of French-language post-secondary education.",
        },
        {
          question: "Are Qualifications Obtained Outside Canada Accepted?",
          answer:
            "Yes, qualifications obtained outside Canada are accepted, provided they are equivalent to Canadian standards. Consider having your qualifications assessed by a recognized organization in Canada.",
        },
        {
          question: "Do I Need a Job Offer to Apply?",
          answer:
            "Yes, a valid job offer from a Canadian employer outside Quebec is a requirement for applying to the Mobilité Francophone program. Refer to the employer requirements section for details.",
        },
        {
          question: "What French exams are accepted to qualify under the Francophone Mobility Program?",
          answer:
            "To be eligible for the Francophone Mobility Work Permit, applicants must demonstrate French language proficiency at CLB/NCLC level 7 or higher in speaking and listening. You can achieve this score by taking an exam under TEF or TCF.",
        },
      ],
    },

    show_testimonials: {
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

let francophoneMobilitySection = mongoose.model(
  "Francophone Mobility Section",
  francophoneMobilitySchema
);
module.exports = francophoneMobilitySection;