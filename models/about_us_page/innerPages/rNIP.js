let mongoose = require("mongoose");
let rnipSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default: "Rural and Northern Immigration Pilot (RNIP)",
    },
    description1: {
      type: String,
      default:
        "The Rural and Northern Immigration Pilot (RNIP) is revolutionizing the way economic immigration benefits smaller communities across Canada. Unlike traditional immigration programs that often favor large cities, RNIP empowers rural and northern communities to take charge of their own economic growth by attracting foreign workers and international students who want to settle permanently.",
    },
    description2: {
      type: String,
      default:
        "The program's community-driven approach is its strength. Communities themselves assess prospective candidates, ensuring they have the skills and intentions that align perfectly with local needs. This means newcomers don't just fill jobs - they become integral parts of the community fabric, contributing their unique talents and perspectives to enrich the area.",
    },
    participationHeading: {
      type: String,
      default: "The participating communities will:.",
    },
    p1: {
      type: String,
      default:
        "Recommend candidates for permanent residence to IRCC for a final decision.",
    },
    p2: {
      type: String,
      default:
        "Connect newcomers with settlement services and mentoring opportunities with established members of the community.",
    },
    benefitsHeading: {
      type: String,
      default: "Benefits of Rural and Northern Immigration Pilot (RNIP)",
    },
    b1: {
      type: String,
      default:
        "Great alternative to Provincial Nominee Programs (PNPs), especially as PNPs are becoming more competitive and difficult to qualify for.",
    },
    b2: {
      type: String,
      default:
        "Some RNIP communities may have lower eligibility requirements compared to other immigration programs, making it easier for individuals to qualify for permanent residence.",
    },
    b3: {
      type: String,
      default:
        "1 year work permit for you and your spouses or common-law partner, while waiting for PR.",
    },
    eligibilityHeading: {
      type: String,
      default: "Eligibility Requirements for RNIP",
    },
    eligibilityDescription: {
      type: String,
      default: "There are two main parts to eligibility:",
    },
    elibilityP1: {
      type: String,
      default:
        "IRCC requirements: You'll need to check if you meet the general criteria set by Immigration, Refugees and Citizenship Canada (IRCC). This could include things like having the right education, work experience, language skills, and more.",
    },
    elibilityP2: {
      type: String,
      default:
        "Community-specific requirements: On top of the IRCC rules, each participating community may have its own unique eligibility criteria. You'll need to research the specific community you're interested in to see what they require.",
    },
    applyHeading: {
      type: String,
      default: "How to Apply for RINP?",
    },
    apply1: {
      type: String,
      default:
        "Find an eligible job: The first step in the actual application process is to secure a job offer from an employer in one of the participating communities. This can be a challenge, so it's important to start your job search early and be persistent.",
    },
    apply2: {
      type: String,
      default:
        "Get a recommendation from the community: Once you have a job offer, your next step is to submit an application for recommendation to the community you want to live in. They'll review.",
    },
    apply3: {
      type: String,
      default:
        "Apply for permanent residence: If the community recommends you, congratulations! You can then move on to the final step of applying for permanent residence through the federal government. This involves submitting a full application with all the necessary documents and fees.",
    },
    applyRequirementsHeading: {
      type: String,
      default:
        "IRCC eligibility requirements is first set of requirements that you will need to meet to qualify to apply and obtain PR in RNIP program:",
    },
    applyRequirementsSubHeading: {
      type: String,
      default: "You must:",
    },
    ar1: {
      type: String,
      default:
        "Have qualifying work experience or have graduated from a publicly funded post-secondary institution in the recommending community",
    },
    ar2: {
      type: String,
      default: "Meet or exceed the language requirements",
    },
    ar3: {
      type: String,
      default: "Meet or exceed the educational requirements",
    },
    ar4: {
      type: String,
      default:
        "Prove you have enough money to support your transition into the community",
    },
    ar5: {
      type: String,
      default: "Intend to live in the community",
    },
    ar6: {
      type: String,
      default: "Meet community-specific requirements",
    },
    arEndingPara: {
      type: String,
      default:
        "If you meet all the requirements, you can start to look for an eligible job in the community.",
    },
    participatingCommunitiesHeading: {
      type: String,
      default: "Participating Communities",
    },
    participatingCommunitiesDescription1: {
      type: String,
      default:
        "As a candidate, you need to find a job with an employer in 1 of the participating communities. If a community endorses you and you’re successful in applying for permanent residence, you’ll then move there to work and live.",
    },
    participatingCommunitiesDescription2: {
      type: String,
      default: "The communities participating in the pilot are:",
    },

    t1h1: {
      type: String,
      default: "Community",
    },

    t1r1c1: {
      type: String,
      default: "North Bay, ON",
    },

    t1r2c1: {
      type: String,
      default: "Sudbury, ON",
    },

    t1r3c1: {
      type: String,
      default: "Timmins, ON",
    },

    t1r4c1: {
      type: String,
      default: "Sault Ste. Marie, ON",
    },

    t1r5c1: {
      type: String,
      default: "Thunder Bay, ON",
    },

    t1r6c1: {
      type: String,
      default: "Brandon, MB",
    },

    t1r7c1: {
      type: String,
      default: "Altona/Rhineland, MB",
    },

    t1r8c1: {
      type: String,
      default: "Moose Jaw, SK",
    },

    t1r9c1: {
      type: String,
      default: "Claresholm, AB",
    },

    t1r10c1: {
      type: String,
      default: "Vernon, BC",
    },

    t1r11c1: {
      type: String,
      default: "West Kootenay (Trail, Castlegar, Rossland, Nelson), BC",
    },

    eachCommunityPara: {
      type: String,
      default: "Each community will also have its own:",
    },
    eachCommunityParaList1: {
      type: String,
      default: "Additional eligibility requirements",
    },
    eachCommunityParaList2: {
      type: String,
      default: "Job search process",
    },
    eachCommunityParaList3: {
      type: String,
      default: "Community recommendation application process",
    },
    eachCommunityParaList4: {
      type: String,
      default: "Criteria to calculate points based on your profile",
    },
    workExpHeading: {
      type: String,
      default: "Work Experience Requirements",
    },
    workExpList1: {
      type: String,
      default:
        "You need 1 year of continuous work experience (at least 1,560 hours) in the past 3 years.",
    },
    workExpList2: {
      type: String,
      default: "The following hours of work are eligible:",
    },
    workExpList2Nested1: {
      type: String,
      default: "Count the hours worked in part-time and full-time jobs.",
    },
    workExpList2Nested2: {
      type: String,
      default:
        "The hours must be in one occupation, but they can be with different employers.",
    },
    workExpList2Nested3: {
      type: String,
      default: "The hours must be over a period of at least 12 months.",
    },
    workExpList2Nested4: {
      type: String,
      default: "These working hours can be inside or outside Canada.",
    },
    workExpList2Nested5: {
      type: String,
      default:
        "If you worked in Canada, you must have been allowed to work in Canada.",
    },
    workExpList3: {
      type: String,
      default:
        "Don’t count hours you weren’t paid for (volunteering or unpaid internships don’t count).",
    },
    workExpList4: {
      type: String,
      default: "Don’t count hours when you were self-employed.",
    },
    workExpList5: {
      type: String,
      default: "Your work experience must include:",
    },
    workExpList5Nested1: {
      type: String,
      default:
        "Most of the main duties and all the essential duties listed in your National Occupational Classification (NOC).",
    },
    workExpList5Nested2: {
      type: String,
      default: "The activities listed in the lead statement of your NOC.",
    },
    jobOfferHeading: {
      type: String,
      default: "Job Offer Requirements",
    },
    jobOfferDesc: {
      type: String,
      default:
        "Your job offer must be for an occupation at a skill level related to the NOC TEER category that matches your work experience.",
    },
    t2h1: {
      type: String,
      default: "Job Offer TEER Category",
    },
    t2h2: {
      type: String,
      default: "Required Work Experience TEER Category",
    },

    t2r1c1: {
      type: String,
      default: "TEER 0 or 1",
    },
    t2r1c2: {
      type: String,
      default: "TEER 0, 1, 2, or 3",
    },

    t2r2c1: {
      type: String,
      default: "TEER 2 or 3",
    },
    t2r2c2: {
      type: String,
      default: "TEER 1, 2, 3, or 4",
    },

    t2r3c1: {
      type: String,
      default: "TEER 4",
    },
    t2r3c2: {
      type: String,
      default: "TEER 2, 3, or 4",
    },

    t2r4c1: {
      type: String,
      default: "TEER 5",
    },
    t2r4c2: {
      type: String,
      default: "Same 5-digit NOC Code",
    },

    t2r5c1: {
      type: String,
      default: "Health Care Exception",
    },
    t2r5c2: {
      type: String,
      default: "NOC 31301 with TEER 1",
    },
    internationalStudentsHeading: {
      type: String,
      default: "International Students Requirements",
    },
    isList1: {
      type: String,
      default:
        "You’re exempt from the work experience criteria above if you graduated with:",
    },
    isList1Nested1: {
      type: String,
      default:
        "A credential from a post-secondary program of 2 years or longer and you:",
    },
    isList1Nested1Nested1: {
      type: String,
      default:
        "were studying as a full-time student for the full duration of the 2+ years",
    },
    isList1Nested1Nested2: {
      type: String,
      default:
        "received the credential no more than 18 months before your application for permanent residence",
    },
    isList1Nested1Nested3: {
      type: String,
      default:
        "were in the community for at least 16 of the last 24 months spent studying to get your credential",
    },
    orStatement: {
      type: String,
      default: "or",
    },
    isList1Nested2: {
      type: String,
      default:
        "A credential from a post-secondary program of 2 years or longer and you:",
    },
    isList1Nested2Nested1: {
      type: String,
      default:
        "Were studying as a full-time student for the full duration of the 2+ years",
    },
    isList1Nested2Nested2: {
      type: String,
      default:
        "Received the credential no more than 18 months before your application for permanent residence",
    },
    isList1Nested2Nested3: {
      type: String,
      default:
        "Were in the community for at least 16 of the last 24 months spent studying to get your credential",
    },
    isImportantPara: {
      type: String,
      default:
        "Important: Before you apply as an international student, make sure your program doesn't fall into these categories:",
    },
    isImportantParaList1: {
      type: String,
      default: "Studied English or French for more than half of the program",
    },
    isImportantParaList2: {
      type: String,
      default:
        "Distance learning was your main method of instruction for than half of the program",
    },
    isImportantParaList3: {
      type: String,
      default:
        "You've received a scholarship or fellowship that requires you to return to your home country to apply what you learned",
    },

    languageRequirementsHeading: {
      type: String,
      default: "Language Requirements",
    },

    languageRequirementsDescription1: {
      type: String,
      default:
        "Language Requirements You must meet the minimum language requirements based on the NOC category that applies to the job offer in the community.",
    },
    languageRequirementsDescription2: {
      type: String,
      default: "This can either be the:",
    },

    languageRequirementsList1Point1: {
      type: String,
      default: "Canadian Language Benchmarks (CLB), or",
    },
    languageRequirementsList1Point2: {
      type: String,
      default: "Niveaux de compétence linguistique canadiens (NCLC)",
    },
    languageRequirementsDescription3: {
      type: String,
      default: "The minimum language requirements for each NOC category are:",
    },
    languageRequirementsList2Point1: {
      type: String,
      default: "NOC 0 and A: CLB/NCLC 6",
    },
    languageRequirementsList2Point2: {
      type: String,
      default: "NOC B: CLB/NCLC 5",
    },
    languageRequirementsList2Point3: {
      type: String,
      default: "NOC C and D: CLB/NCLC 4",
    },

    t3h1: {
      type: String,
      default: "NOC Category",
    },
    t3h2: {
      type: String,
      default: "Minimum Language Requirement (CLB/NCLC)",
    },
    t3h3: {
      type: String,
      default: "IELTS Equivalency (Module)",
    },

    t3r1c1: {
      type: String,
      default: "NOC 0 and A	",
    },
    t3r1c2: {
      type: String,
      default: "6",
    },
    t3r1c3: {
      type: String,
      default: "Listening: 5.5, Reading: 5.0, Writing: 5.5, Speaking: 5.5",
    },

    t3r2c1: {
      type: String,
      default: "NOC B",
    },
    t3r2c2: {
      type: String,
      default: "5",
    },
    t3r2c3: {
      type: String,
      default: "Listening: 5.0, Reading: 4.0, Writing: 5.0, Speaking: 5.0",
    },

    t3r3c1: {
      type: String,
      default: "NOC C and D",
    },
    t3r3c2: {
      type: String,
      default: "4",
    },
    t3r3c3: {
      type: String,
      default: "Listening: 4.5, Reading: 3.5, Writing: 4.0, Speaking: 4.0",
    },
    educationalReqHeading: {
      type: String,
      default: "Educational Requirements",
    },
    educationalReqDescription: {
      type: String,
      default:
        "You must have a Canadian high school diploma or an educational credential assessment (ECA) report, from a designated organization or professional body, showing that you completed a foreign credential that’s equal to Canadian secondary school (high school).",
    },

    settlementFundsHeading: {
      type: String,
      default: "Settlement Funds",
    },
    settlementFundsPara1: {
      type: String,
      default:
        "Applicants who are not currently working legally in Canada must demonstrate sufficient financial resources to support themselves and any accompanying dependents during the settlement process.",
    },
    settlementFundsPara2: {
      type: String,
      default:
        "The proof of funds is required regardless of whether family members will be joining the applicant in Canada.",
    },

    intentionHeading: {
      type: String,
      default: "Intention to Reside in the Community",
    },
    intentionDescription: {
      type: String,
      default:
        "To participate in the pilot, you must plan to live in the community.",
    },

    findingJobHeading: {
      type: String,
      default: "Finding a Job for Canadian Immigration",
    },
    findingJobList1: {
      type: String,
      default:
        "As a candidate, you must have a genuine job offer to work in one of the participating communities.",
    },
    findingJobList1: {
      type: String,
      default:
        "Keep in mind each community will have its own requirements and job search process.",
    },
    findingJobList1: {
      type: String,
      default:
        "Once you have a job offer and meet all the requirements, you can apply for a community recommendation.",
    },

    jobOfferReqHeading: {
      type: String,
      default: "Job offer requirements",
    },
    jobOfferReqDescription: {
      type: String,
      default:
        "To be eligible for a job offer, the position must meet all of the following criteria:",
    },
    jobOfferReqList1: {
      type: String,
      default: "Located in the community",
    },
    jobOfferReqList1: {
      type: String,
      default: "Located in the community",
    },
    jobOfferReqList2: {
      type: String,
      default: "Employer continues to run the business in the same community",
    },
    jobOfferReqList3: {
      type: String,
      default: "Full-time, with at least 30 paid hours per week",
    },
    jobOfferReqList4: {
      type: String,
      default: "Non-seasonal, with consistent hours throughout the year",
    },
    jobOfferReqList5: {
      type: String,
      default: "Permanent position, no set end date",
    },
    jobOfferReqList6: {
      type: String,
      default:
        "Meets or exceeds the Job Bank’s minimum wage for your job offer’s National Occupational Classification (NOC).",
    },
    jobOfferReqList7: {
      type: String,
      default: "You have the required skills and experience to do the job",
    },

    jobOfferCannotPara: {
      type: String,
      default: "The job offer cannot be from:",
    },
    jobOfferCannotList1: {
      type: String,
      default: "A consulate",
    },
    jobOfferCannotList2: {
      type: String,
      default: "A staffing or employment agency",
    },
    jobOfferCannotList3: {
      type: String,
      default: "A business you own or have significant control over",
    },
    jobOfferCannotList4: {
      type: String,
      default: "A business offering adult services on a regular basis",
    },
    jobOfferCannotList5: {
      type: String,
      default: "An employer with administrative penalties",
    },
    howApplyHeading: {
      type: String,
      default: "How to Apply",
    },
    howApplyList1: {
      type: String,
      default:
        "Look for a qualifying job offer with a qualifying employer in the qualifying community.",
    },
    howApplyList2: {
      type: String,
      default:
        "Ensure your job offer location is within RNIP Communities Boundaries.",
    },
    howApplyList3: {
      type: String,
      default:
        "Appear for English or French test and obtain the score as per your NOC.",
    },
    howApplyList4: {
      type: String,
      default:
        "Submit an application for RNIP recommendation after following all IRCC and Community specific guidelines.",
    },
    howApplyList5: {
      type: String,
      default:
        "The community reviews your RNIP application, might interview you and the employer.",
    },
    howApplyList6: {
      type: String,
      default:
        "The community recommends you, making you eligible to apply to IRCC for permanent residence in Canada based on their recommendation.",
    },
    howApplyList7: {
      type: String,
      default:
        "You submit PR application to Immigration, Refugees and Citizenship Canada (IRCC).",
    },
    howApplyList8: {
      type: String,
      default:
        "IRCC conducts application reviews to check if you meet the IRCC RNIP requirements, perform medical clearances, and conduct background checks.",
    },
    howApplyList9: {
      type: String,
      default: "You and your family members will receive permanent residency.",
    },
    refusalReasonsHeading: {
      type: String,
      default: "Common Reasons for Refusals for RNIP",
    },
    refusalReasonsList1: {
      type: String,
      default: "Having a job offer that does not match your work experience.",
    },
    refusalReasonsList2: {
      type: String,
      default:
        "Employer cannot justify the need and genuineness of the job offer.",
    },
    refusalReasonsList3: {
      type: String,
      default:
        "Improper calculation of hours that count towards work experience.",
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
        "Can I apply for a Canada work permit under the RNIP? ",
    },
    qa1: {
      type: String,
      default:
        "Yes, you might qualify for a one-year work permit for Canada, allowing you to work in Canada while your PR application is processed. Your spouse or common law partner can accompany you as well.  ",
    },
    q2: {
      type: String,
      default:
        "  Can I work anywhere in Canada with my RNIP work permit?",
    },
    qa2: {
      type: String,
      default:
        " Unfortunately, no. The RNIP community recommendation based work permit authorises you to work for the employer that gave you the job offer from within the community. Your spouse will only be allowed to work within the same community as you. ",
    },

    q3: {
      type: String,
      default:
        " What are the job offer requirements for RNIP recommendation?",
    },
    qa3: {
      type: String,
      default:
        " To be eligible for a job offer, the position must meet all of the following criteria: <ul> <li>Located in the community</li> <li>Employer continues to run the business in the same community</li> <li>Full-time, with at least 30 paid hours per week</li> <li>Non-seasonal, with consistent hours throughout the year</li> <li>Permanent position, no set end date</li> <li>Meets or exceeds the Job Bank’s minimum wage for your job offer’s National Occupational Classification (NOC).</li> <li>You have the required skills and experience to do the job</li> </ul>" ,
    },
    q4: {
      type: String,
      default:
        "  Can I apply for RNIP without a job offer?",
    },
    qa4: {
      type: String,
      default:
        "  Unfortunately, no. RNIP is employer driven program and job offer from an employer in one of the participating communities is required to qualify for this program. ",
    },

    q5: {
      type: String,
      default:
        " Is RNIP better than Express Entry?",
    },
    qa5: {
      type: String,
      default:
        " The decision on whether the RNIP is better than Express Entry depends on your individual circumstances, preferences, and eligibility. If you find that the CRS cut-off scores are too high for your profile, then RNIP might be a more viable option for you.     ",
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

let rNIPSection = mongoose.model("RNIP Page", rnipSchema);
module.exports = rNIPSection;
