let mongoose = require("mongoose");
let skilledSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default:
        "British Columbia Provincial Nominee Program (BC PNP) Skilled Worker Stream",
    },
    description: {
      type: String,
      default:
        "The British Columbia Skilled Worker Stream is an integral part of the British Columbia Provincial Nominee Program (BC PNP). Designed to attract skilled immigrants, this stream prioritizes individuals who hold job offers and demonstrate a strong potential to contribute to the labor force in British Columbia.",
    },
    benefitsHeading: {
      type: String,
      default: "Benefits of BC Skilled Worker Stream",
    },
    b1: {
      type: String,
      default:
        "Nomination Priority: Successful candidates nominated through the BC Skilled Worker stream receive an invitation to apply for Canadian permanent residence.",
    },
    b2: {
      type: String,
      default:
        "No Express Entry Profile Required: Unlike other immigration streams, applicants for this stream do not need an Express Entry profile to be eligible.",
    },
    b3: {
      type: String,
      default:
        "Accelerated Processing: While Express Entry is not mandatory, candidates with an active profile may choose to apply through the Express Entry system for faster processing.",
    },
    eligibleSubHeading: {
      type: String,
      default: "First you must be eligible with BCPNP Skilled Worker Stream:",
    },
    eligibileHeading: {
      type: String,
      default: "Eligibility Requirements for the BC Skilled Worker Stream",
    },
    eligibleDesc: {
      type: String,
      default:
        "As an aspiring skilled worker in British Columbia, you’ll need to meet specific criteria to qualify for this stream. Here are the key eligibility requirements:",
    },
    e1: {
      type: String,
      default: "Job Offer Acceptance:",
    },
    e1l1: {
      type: String,
      default:
        "You must have accepted an indeterminate (with no defined end date), full-time job offer from a B.C. employer.",
    },
    e1l2: {
      type: String,
      default:
        "The job offer must fall under NOC (National Occupational Classification) Skill Levels 0, 1, 2, or 3.",
    },

    e2: {
      type: String,
      default: "Qualifications and Experience:",
    },
    e2l1: {
      type: String,
      default: "You should be qualified to perform the duties of the job.",
    },
    e2l2: {
      type: String,
      default:
        "A minimum of two years of full-time (or full-time equivalent) work experience at NOC Skill Levels 0, 1, 2, or 3 is required.",
    },

    e3: {
      type: String,
      default: "Language Proficiency:",
    },
    e3l1: {
      type: String,
      default:
        "Meet the minimum language requirements in either English or French.",
    },

    e4: {
      type: String,
      default: "Wage Offer:",
    },
    e4l1: {
      type: String,
      default:
        "Your wage offer should align with B.C. wage rates for the specific occupation.",
    },

    e5: {
      type: String,
      default: "Financial Capability:",
    },
    e5l1: {
      type: String,
      default:
        "Demonstrate that you can support yourself and your dependents during your stay in British Columbia.",
    },

    expressConsiderationHeading: {
      type: String,
      default: "Express Entry Consideration",
    },

    expressConsiderationDescription: {
      type: String,
      default:
        "While an Express Entry profile is not mandatory, candidates who meet the eligibility criteria for the BC Skilled Worker stream and have an active Express Entry profile may choose to apply through Express Entry for accelerated processing.",
    },
    recruitmentHeading: {
      type: String,
      default: "Employer Requirements for BC PNP Skilled Worker Stream",
    },
    recruitmentDescription: {
      type: String,
      default:
        "For applicants to most BC Skills Immigration programs, the employer must meet specific requirements:",
    },

    recruitmentSubHeading: {
      type: String,
      default:
        "Employer Eligibility Requirements for the BC Skilled Worker Stream",
    },
    recruitmentSubDesc: {
      type: String,
      default:
        "As an employer in British Columbia, you play a crucial role in supporting skilled workers through the BC Skilled Worker stream. To participate, your organization must meet specific requirements and fulfill responsibilities:",
    },
    r1: {
      type: String,
      default: "Establishment in B.C.",
    },
    r1l1: {
      type: String,
      default:
        "Your business must be established within the province of British Columbia.",
    },

    r2: {
      type: String,
      default: "Domestic Labor Market Recruitment:",
    },
    r2l1: {
      type: String,
      default:
        "Comply with domestic labor market recruitment requirements to ensure fair opportunities for local workers.",
    },

    r3: {
      type: String,
      default: "Job Offer:",
    },
    r3l1: {
      type: String,
      default: "Offer full-time, permanent employment to eligible candidates.",
    },
    r3l2: {
      type: String,
      default:
        "Note that certain categories, such as BC PNP Tech occupations, university professors, lecturers, and post-doctoral fellows working for a public university in B.C., do not require a permanent job offer.",
    },

    r4: {
      type: String,
      default: "Wage Alignment:",
    },
    r4l1: {
      type: String,
      default:
        "The wage you offer should be in line with industry standards for the specific occupation.",
    },

    r5: {
      type: String,
      default: "Documentation and Forms:",
    },
    r5l1: {
      type: String,
      default: "Provide a signed job offer to candidates.",
    },
    r5l2: {
      type: String,
      default:
        "Complete and sign the employer declaration form as part of the application process.",
    },
    r5l3: {
      type: String,
      default: "Submit supporting documents related to your business.",
    },

    r6: {
      type: String,
      default: "Compliance with Laws and Regulations:",
    },
    r6l1: {
      type: String,
      default:
        "Adhere to all relevant laws and regulations governing employment and business practices.",
    },

    applicationHeading: {
      type: String,
      default: "Application Process for BC Skilled Worker Stream",
    },
    a1: {
      type: String,
      default: "Expression of Interest (EOI) System:",
    },
    a1l1: {
      type: String,
      default:
        "Expression of Interest (EOI) System:Candidates meeting minimum requirements register a profile on BC’s online immigration portal.",
    },
    a1l2: {
      type: String,
      default:
        "Specify whether applying via Express Entry or Skills Immigration system.",
    },

    a2: {
      type: String,
      default: "Profile Assessment and Ranking:",
    },
    a2l1: {
      type: String,
      default:
        "Submitted profiles are scored and ranked using the BC Skills Immigration Ranking System.",
    },
    a2l2: {
      type: String,
      default:
        "Highest-ranking candidates receive invitations to apply during periodic intakes.",
    },

    a3: {
      type: String,
      default: "Invitation to Apply (ITA):",
    },
    a3l1: {
      type: String,
      default:
        "Invited candidates must submit a complete application within 30 days.",
    },
    a3l2: {
      type: String,
      default: "Application fee: $1475 CAD per applicant.",
    },

    a4: {
      type: String,
      default: "Provincial Nomination and Work Permit:",
    },
    a4l1: {
      type: String,
      default:
        "If approved, candidates receive a provincial nomination for permanent residence.",
    },
    a4l2: {
      type: String,
      default:
        "Request a letter of support for a temporary work permit to start working in Canada during processing.",
    },

    a5: {
      type: String,
      default: "Express Entry Applicants:",
    },
    a5l1: {
      type: String,
      default:
        "If applying through Express Entry, receive a nomination notification on IRCC account.",
    },
    a5l2: {
      type: String,
      default:
        "Accepting the nomination boosts Comprehensive Ranking System (CRS) score by 600 points.",
    },

    a5l3: {
      type: String,
      default:
        "Virtually guarantees an Invitation to Apply (ITA) for permanent residence.",
    },
    a5l4: {
      type: String,
      default:
        "Submit official application within the designated timeframe (usually processed within six months).",
    },

    a6: {
      type: String,
      default: "Skills Immigration Applicants:",
    },
    a6l1: {
      type: String,
      default: "If applying through regular Skills Immigration system:",
    },
    a6l1n1: {
      type: String,
      default: "Prepare a paper-based application.",
    },
    a6l1n2: {
      type: String,
      default: "Submit it by mail to the appropriate application centre.",
    },
    a6l1n3: {
      type: String,
      default: "Generally processed within 18 months for permanent residence.",
    },

    StillNotHeading: {
      type: String,
      default: "Still not Sure?",
    },
    s1: {
      type: String,
      default:
        "Contact Brightlight Immigration today to assess your profile and embark on a transformative journey towards achieving your Canadian dream. With over a decade of experience, we specialize in handling BCPNP Skilled Worker Stream. Our approval rate for these programs is near to 100%. We achieve this with a tailored approach to your specific case. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
    },
    s2: {
      type: String,
      default:
        "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your PR. Start your process now.",
    },
    whyChooseHeading: {
      type: String,
      default: "Why Choose Us",
    },

    whyChooseDescription: {
      type: String,
      default:
        "Our personalized approach, extensive experience, and high success rate make us the ideal choice for navigating the BC PNP Skilled Worker Stream. Learn more about why Brightlight Immigration stands out in helping you achieve your Canadian immigration goals.",
    },

    WhyChooseUsHeading01: {
      type: String,
      default:
        "Why Choose Us?",
    },
    wcu1: {
      type: String,
      default:
        "<strong>Experienced Team:</strong> Over a decade of experience in handling Immigration applications with a high success rate. ",
    },
    wcu2: {
      type: String,
      default:
        "<strong>Tailored Approach:</strong> Personalized services and strategies based on your specific case.",
    },
    wcu3: {
      type: String,
      default:
        "<strong>High Success Rate:</strong> Proven track record using case law and precedents for positive results.",
    },
    wcu4: {
      type: String,
      default:
        "<strong>Comprehensive Support:</strong> Assistance from the start of the application process to obtaining your PR.",
    },
    
    faq_heading: {
      type: String,
      default:
        "FAQ's Made Simple",
    },
    q1: {
      type: String,
      default:
        " Whether part-time work experience that was earned while on a study permit can be considered as Directly Related Work Experience for BCPNP application?",
    },
    qa1: {
      type: String,
      default:
        "Student work experience that is not part of a paid co-op work term does not count towards directly related work experience points.",
    },
    q2: {
      type: String,
      default:
        "Can an employer operating as sole proprietors offer support and recommendation for BCPNP?",
    },
    qa2: {
      type: String,
      default:
        " At its sole discretion, the BC PNP may consider an application where the supporting employer does not meet the minimum requirements, including but not limited to the company’s business structure, such as sole proprietorships. However, to be considered, the supporting employer must, at the time of application, make a compelling business case in writing to the BC PNP that demonstrates how the nomination will generate significant economic benefit to B.C.",
    },

    q3: {
      type: String,
      default:
        "For BCPNP one of the requirements for the employment is that there should be minimum 3 full time or equivalent part time employees working for that employer who has provided the job offer, if outside of metro Vancouver. Do those 3 include the PNP applicant as well?",
    },
    qa3: {
      type: String,
      default:
        "If you, as the applicant, are currently working for the employer supporting your application, you may count yourself as well as other PNP applicants towards the minimum number of full-time employees for the purposes of this requirement.",
    },
    q4: {
      type: String,
      default:
        " Is it possible to include employees from various locations of the same employer that supports the BC PNP within British Columbia?",
    },
    qa4: {
      type: String,
      default:
        "Only individuals who are on your supporting employer’s payroll will be considered employees of the company. Your employer may be asked to submit additional supporting documentation, such as a T4 Summary of Remuneration Paid, to demonstrate that this requirement is met.",
    },

    q5: {
      type: String,
      default:
        " ",
    },
    qa5: {
      type: String,
      default:
        "   ",
     },
    q6: {
      type: String,
      default:
        "  ",
    },
    qa6: {
      type: String,
      default:
        "   ",
    },

    q7: {
      type: String,
      default:
        " ",
    },
    qa7: {
      type: String,
      default:
        "    ",
    },

    q8: {
      type: String,
      default:
        " ",
    },
    qa8: {
      type: String,
      default:
        " ",
    },
    
    q9: {
      type: String,
      default:
        " ",
    },
    qa9: {
      type: String,
      default:
        "  ",
    },
    q10: {
      type: String,
      default:
        " ",
    },
    qa10: {
      type: String,
      default:
        " ",
    },
    show_testimonials: {
      type: String,
      default: "N"
    }
  },
  {
    timestamps: true,
  }
);

let skilledWorkerStreamSection = mongoose.model(
  "Skilled Worker Stream Latest Page",
  skilledSchema
);
module.exports = skilledWorkerStreamSection;
