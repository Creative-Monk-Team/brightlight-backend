let mongoose = require("mongoose");
let entryLevelSemiSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default:
        "British Columbia Entry Level and Semi-Skilled Worker (ELSS) Stream",
    },
    description1: {
      type: String,
      default:
        "The British Columbia Entry Level and Semi-Skilled Worker (ELSS) stream is part of the comprehensive British Columbia Provincial Nominee Program (BC PNP). Administered by the province of British Columbia, this program aims to facilitate the immigration journey for semi-skilled and entry level work experience.",
    },
    description2: {
      type: String,
      default:
        "Whether you’re a prospective immigrant seeking opportunities or an employer looking to hire skilled workers, the BC ELSS stream provides a pathway to contribute to the province’s vibrant workforce.",
    },
    benefitsHeading: {
      type: String,
      default:
        "Benefits of BCPNP Entry Level and Semi-Skilled Worker (ELSS) Stream",
    },
    b1: {
      type: String,
      default:
        "<strong>Nomination Priority:</strong> Successful candidates nominated through the BCPNP – Entry Level and Semi-Skilled Program (ELSS) receive an invitation to apply for Canadian permanent residence.",
    },
    b2: {
      type: String,
      default:
        "<strong>No Express Entry Profile Required:</strong> Unlike other immigration streams, applicants for this program do not need an Express Entry profile to be eligible.",
    },
    b3: {
      type: String,
      default:
        "<strong>No High-Skilled Job Offer Required:</strong> You do not need to be employed or have a job offer in a high-skilled occupation.",
    },
    eligibilityHeading: {
      type: String,
      default:
        "Eligibility Criteria for the British Columbia BCPNP Entry Level and Semi-Skilled (ELSS) Program",
    },
    elibilityDescription: {
      type: String,
      default:
        "The BCPNP Entry Level and Semi-Skilled (ELSS) Program encompasses five key eligibility categories, as outlined below:",
    },
    eligibilityCategory1: {
      type: String,
      default: "Job Offer",
    },
    eligibilityCategory1List1: {
      type: String,
      default:
        "Secure an indeterminate, full-time employment offer from an eligible BC employer.",
    },
    eligibilityCategory1List2: {
      type: String,
      default:
        "The job offer must fall within an eligible National Occupational Classification (NOC) code, specifically TEER Category 4 or 5.",
    },
    eligibilityCategory1List3: {
      type: String,
      default: "Location-specific variations apply:",
    },
    eligibilityCategory1List3NestedList1: {
      type: String,
      default:
        "Northeast Development Region of BC: All NOC 4 or 5 occupations are eligible except for live-in caregivers (NOC 44100).",
    },
    eligibilityCategory1List3NestedList2: {
      type: String,
      default:
        "Outside the Northeast Development Region: Eligible occupations include:",
    },
    eligibilityCategory1List3NestedList2NestedList1: {
      type: String,
      default:
        "Travel and accommodation roles (e.g., hotel front desk clerks, tour guides).",
    },
    eligibilityCategory1List3NestedList2NestedList2: {
      type: String,
      default:
        "Food and beverage service positions (e.g., bartenders, food servers).",
    },
    eligibilityCategory1List3NestedList2NestedList3: {
      type: String,
      default: "Support occupations in accommodation and travel services.",
    },
    eligibilityCategory1List3NestedList2NestedList4: {
      type: String,
      default: "Other service roles (e.g., dry cleaning, laundry).",
    },
    eligibilityCategory1List3NestedList2NestedList5: {
      type: String,
      default: "Food processing positions (e.g., machine operators, butchers).",
    },

    eligibilityCategory2: {
      type: String,
      default: "Work Experience",
    },
    eligibilityCategory2List1: {
      type: String,
      default:
        "Maintain full-time employment (averaging at least 30 hours per week year-round) with the BC employer supporting your BCPNP application.",
    },
    eligibilityCategory2List2: {
      type: String,
      default:
        "Work in any ELSS-eligible occupation for at least 9 consecutive months before registering for the BCPNP.",
    },

    eligibilityCategory3: {
      type: String,
      default: "Education",
    },
    eligibilityCategory3List1: {
      type: String,
      default:
        "Successfully complete secondary education (high school) within or outside Canada.",
    },
    eligibilityCategory3List2: {
      type: String,
      default:
        "If the position requires certification, licensing, or registration, provide relevant documentation.",
    },

    eligibilityCategory4: {
      type: String,
      default: "Language Proficiency",
    },
    eligibilityCategory4List1: {
      type: String,
      default:
        "Attain a Canadian Language Benchmark (CLB) score of at least 4 in English or French.",
    },

    eligibilityCategory5: {
      type: String,
      default: "Eligible ELSS Occupations",
    },

    table1Heading: {
      type: String,
      default: "Occupations in Travel and Accommodation",
    },

    t1h1: {
      type: String,
      default: "Occupation",
    },
    t1h2: {
      type: String,
      default: "NOC Code",
    },

    t1r1c1: {
      type: String,
      default: "Hotel front desk clerks",
    },
    t1r1c2: {
      type: String,
      default: "64314",
    },

    table2Heading: {
      type: String,
      default: "Tour and Recreational Guides and Casino Occupations",
    },

    t2h1: {
      type: String,
      default: "Occupation",
    },
    t2h2: {
      type: String,
      default: "NOC Code",
    },

    t2r1c1: {
      type: String,
      default: "Tour and travel guides",
    },
    t2r1c2: {
      type: String,
      default: "64320",
    },

    t2r2c1: {
      type: String,
      default: "Casino workers",
    },
    t2r2c2: {
      type: String,
      default: "64321",
    },

    t2r3c1: {
      type: String,
      default: "Outdoor sport and recreational guides",
    },
    t2r3c2: {
      type: String,
      default: "64322",
    },

    table3Heading: {
      type: String,
      default: "Occupations in Food and Beverage Service",
    },

    t3h1: {
      type: String,
      default: "Occupation",
    },
    t3h2: {
      type: String,
      default: "NOC Code",
    },

    t3r1c1: {
      type: String,
      default: "Maîtres d’hotel and hosts/hostesses",
    },
    t3r1c2: {
      type: String,
      default: "64300",
    },

    t3r2c1: {
      type: String,
      default: "Bartenders",
    },
    t3r2c2: {
      type: String,
      default: "64301",
    },

    t3r3c1: {
      type: String,
      default: "Food and beverage servers",
    },
    t3r3c2: {
      type: String,
      default: "65200",
    },

    t3r4c1: {
      type: String,
      default:
        "Food counter attendants, kitchen helpers and related support occupations",
    },
    t3r4c2: {
      type: String,
      default: "65201",
    },

    table4Heading: {
      type: String,
      default: "Cleaners (Employed Directly by Hotels/Resorts)",
    },

    t4h1: {
      type: String,
      default: "Occupation",
    },
    t4h2: {
      type: String,
      default: "NOC Code",
    },

    t4r1c1: {
      type: String,
      default:
        "Support occupations in accommodation, travel and facilities set-up services",
    },
    t4r1c2: {
      type: String,
      default: "65210",
    },

    t4r2c1: {
      type: String,
      default: "Light duty cleaners",
    },
    t4r2c2: {
      type: String,
      default: "65310",
    },

    t4r3c1: {
      type: String,
      default: "Specialized cleaners",
    },
    t4r3c2: {
      type: String,
      default: "65311",
    },

    t4r4c1: {
      type: String,
      default: "Janitors, caretakers and heavy-duty cleaners",
    },
    t4r4c2: {
      type: String,
      default: "65312",
    },

    table5Heading: {
      type: String,
      default:
        "Other Service Occupations (Employed Directly by Hotels/Resorts)",
    },

    t5h1: {
      type: String,
      default: "Occupation",
    },
    t5h2: {
      type: String,
      default: "NOC Code",
    },

    t5r1c1: {
      type: String,
      default: "Dry cleaning, laundry and related occupations",
    },
    t5r1c2: {
      type: String,
      default: "65320",
    },

    t5r2c1: {
      type: String,
      default: "Other service support occupations",
    },
    t5r2c2: {
      type: String,
      default: "65329",
    },

    t5Disclaimier: {
      type: String,
      default:
        "*For the purposes of the BC PNP, a resort is defined as an accommodation facility that is associated with recreational activities. These activities can include skiing, golfing, boating, fishing, biking, swimming, horseback riding, hiking, nature-based or interpretive tours, etc.",
    },

    table6Heading: {
      type: String,
      default: "Food Processing",
    },

    t6h1: {
      type: String,
      default: "Occupation",
    },
    t6h2: {
      type: String,
      default: "NOC Code",
    },

    t6r1c1: {
      type: String,
      default:
        "Process control and machine operators, food and beverage processing",
    },
    t6r1c2: {
      type: String,
      default: "94140",
    },

    t6r2c1: {
      type: String,
      default:
        "Industrial butchers and meat cutters, poultry preparers and related workers",
    },
    t6r2c2: {
      type: String,
      default: "94141",
    },

    t6r3c1: {
      type: String,
      default: "Fish and seafood plant workers",
    },
    t6r3c2: {
      type: String,
      default: "94142",
    },

    t6r4c1: {
      type: String,
      default: "Testers and graders, food and beverage processing",
    },
    t6r4c2: {
      type: String,
      default: "94143",
    },

    t6r5c1: {
      type: String,
      default: "Labourers in food and beverage processing",
    },
    t6r5c2: {
      type: String,
      default: "95106",
    },

    applicationProcessHeading: {
      type: String,
      default:
        "Application Process for British Columbia Entry Level and Semi-Skilled Worker Stream",
    },

    applicationProcessDescription: {
      type: String,
      default:
        "The BCPNP Entry Level and Semi-Skilled Worker stream operates on an Expression of Interest (EOI) system. Let’s delve into the details:",
    },

    app1: {
      type: String,
      default: "Eligibility and Registration:",
    },
    app1Nested1: {
      type: String,
      default:
        "Candidates who meet the minimum stream requirements can register a profile using BC’s online immigration portal.",
    },
    app1Nested2: {
      type: String,
      default:
        "Once submitted, profiles are assessed, and candidates receive a score based on the BC Skills Immigration Ranking System.",
    },

    app2: {
      type: String,
      default: "Invitations and Application:",
    },
    app2Nested1: {
      type: String,
      default:
        "The highest-ranking candidates are invited to apply to the stream during periodic intakes.",
    },
    app2Nested2: {
      type: String,
      default:
        "Upon receiving an invitation, candidates must submit a complete application within 30 days.",
    },

    app3: {
      type: String,
      default: "Provincial Nomination and Work Permit:",
    },
    app3Nested1: {
      type: String,
      default:
        "If the application is approved, the candidate receives a provincial nomination for permanent residence from BC.",
    },
    app3Nested2: {
      type: String,
      default:
        "Candidates not already working for a BC employer can request a letter of support for a temporary work permit. This allows them to work in Canada while their permanent residence application is processed.",
    },
    app3Nested3: {
      type: String,
      default:
        "Applying for a work permit with a province’s nomination letter is a separate application to IRCC.",
    },

    app4: {
      type: String,
      default: "Official Application for Permanent Residence:",
    },
    app4Nested1: {
      type: String,
      default:
        "After receiving the provincial nomination, the applicant has six months to submit an official application for permanent residence.",
    },
    app4Nested2: {
      type: String,
      default: "The applications are now submitted online.",
    },

    StillNotHeading: {
      type: String,
      default: "Still not Sure?",
    },
    s1: {
      type: String,
      default:
        "Contact Brightlight Immigration today to assess your profile and embark on a transformative journey towards achieving your Canadian dream. With over a decade of experience, we specialize in handling BCPNP Entry Level and Semi-Skilled (ELSS) Program. Our approval rate for these programs is nearly 100%. We achieve this with a tailored approach to your specific case. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
    },
    s2: {
      type: String,
      default:
        "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your PR. Start your process now.",
    },
    whyChooseHeading: {
        type: String,
        default: "Why Choose Us?"
    },
    whyChooseDescription: {
        type: String,
        default: "At Brightlight Immigration, we offer:"
    },
    whyChoosePoint1: {
        type: String,
        default: "Expertise: Over a decade of experience with high approval rates."
    },
    whyChoosePoint2: {
        type: String,
        default: "Personalized Service: Tailored approach to address each unique case."
    },
    whyChoosePoint3: {
        type: String,
        default: "Case Law Utilization: Leveraging precedents from similar cases."
    },
    whyChoosePoint4: {
        type: String,
        default: "Full Support: From initial application to final PR approval."
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
        " Can I count my work experience that I gained while on a study permit towards BCPNP Entry Level and Semi-Skilled (ELSS) Program?",
    },
    qa1: {
      type: String,
      default:
        " Student work experience that is not part of a paid co-op work term does not count towards directly related work experience points.",
    },
    q2: {
      type: String,
      default:
        " Can an employer operating as sole proprietors offer support and recommendation for BCPNP?",
    },
    qa2: {
      type: String,
      default:
        " At its sole discretion, the BC PNP may consider an application where the supporting employer does not meet the minimum requirements, including but not limited to the company’s business structure, such as sole proprietorships. However, to be considered, the supporting employer must, at the time of application, make a compelling business case in writing to the BC PNP that demonstrates how the nomination will generate significant economic benefit to B.C.",
    },

    q3: {
      type: String,
      default:
        "For BCPNP one of the requirements for employment is that there should be minimum 3 full time or equivalent part time employees working for that employer who has provided the job offer, if outside of metro Vancouver. Do those 3 include the PNP applicant as well?",
    },
    qa3: {
      type: String,
      default:
        "If you, as the applicant, are currently working for the employer supporting your application, you may count yourself as well as other PNP applicants towards the minimum number of full-time employees for the purposes of this requirement.",
    },
    q4: {
      type: String,
      default:
        "Is it possible to include employees from various locations of the same employer that supports the BC PNP within British Columbia?",
    },
    qa4: {
      type: String,
      default:
        " Only individuals who are on your supporting employer’s payroll will be considered employees of the company. Your employer may be asked to submit additional supporting documentation, such as a T4 Summary of Remuneration Paid, to demonstrate that this requirement is met. ",
    },

    q5: {
      type: String,
      default:
        "What is the minimum number of years in operation my employer has to be in operation for supporting my BCPNP Entry Level and Semi-Skilled (ELSS) stream application? ",
    },
    qa5: {
      type: String,
      default:
        " The employer who is supporting your BCPNP Entry Level and Semi-Skilled (ELSS) stream application must have been operating in BC for at least two years. ",
     },
    q6: {
      type: String,
      default:
        " ",
    },
    qa6: {
      type: String,
      default:
        "  ",
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
    timeStamps: true,
  }
);

let entryLevelSemiSkilledSection = mongoose.model(
  "Entry Level Semi Skilled Page",
  entryLevelSemiSchema
);
module.exports = entryLevelSemiSkilledSection;
