let mongoose = require("mongoose");
let bcpnpSchema = mongoose.Schema(
  {
    Heading: {
      type: String,
      default: "British Columbia Provincial Nominee Program (BC PNP)",
    },
    Description1: {
      type: String,
      default:
        "British Columbia (BC) is a beautiful province in Canada with stunning scenery, exciting cities, and lots of job opportunities. If you want to move to BC, the BC Provincial Nominee Program (BCPNP) can help you make it happen.",
    },
    Description2: {
      type: String,
      default:
        "The British Columbia Provincial Nominee Program (BC PNP) is an economic immigration program that allows British Columbia to select skilled workers, business people, and international graduates who will contribute to the province's economy. If you are nominated by BC PNP, you and your family can apply to IRCC for permanent residence in Canada.",
    },
    fiveStreamsHeading: {
      type: String,
      default:
        "There are five streams under British Columbia Provincial Nominee Program (BC PNP):",
    },
    fiveStreamsNote: {
      type: String,
      default:
        "Note: BCPNP issues targeted invitations to apply for select occupations called priority occupations.",
    },

    //
    ApplyHeading: {
      type: String,
      default: "How to Apply for BCPNP?",
    },

    ApplyList1: {
      type: String,
      default:
        "Create an online profile and provide information about your skills, experience, education, and work experience. Or, for a stress-free solution,",
    },
    ApplyList2: {
      type: String,
      default:
        "Submit an expression of interest (EOI) in the program and rank your choices of streams.",
    },
    ApplyList3: {
      type: String,
      default:
        "Complete and submit a detailed application package, including all the relevant and supporting documents.",
    },
    ApplyList4: {
      type: String,
      default:
        "Once your application is approved, you will be nominated by B.C. and can apply for permanent residence to IRCC.",
    },

    RefusalHeading: {
      type: String,
      default: "Common Reasons for Refusals in BCPNP",
    },

    RefusalList1: {
      type: String,
      default: "You shared incorrect information.",
    },
    RefusalList2: {
      type: String,
      default:
        "You couldn’t meet the minimum qualifications for BC PNP including having the required skills, experience, education, and language proficiency.",
    },
    RefusalList3: {
      type: String,
      default: "Your occupation is not in demand.",
    },
    RefusalList4: {
      type: String,
      default:
        "You couldn’t demonstrate your family ties to that particular province.",
    },

    //
    EligibilityHeading: {
      type: String,
      default:
        "Eligibility criteria for British Columbia Provincial Nominee Program (BC PNP)",
    },

    EligibilitySubHead: {
      type: String,
      default: "Candidate’s Criteria",
    },
    EligibilityReviewLine: {
      type: String,
      default:
        "Please review the eligibility criteria for each stream, as it varies from one stream to another.",
    },
    EligibilityCriteriaHeading: {
      type: String,
      default: "Eligibility Criteria for Employer Supporting BCPNP Application",
    },
    EligibilityList1: {
      type: String,
      default: "Employer Eligibility Criteria:",
    },
    EligibilityList1NestedList1: {
      type: String,
      default: "Employer must be established in BC with a physical presence.",
    },
    EligibilityList1NestedList2: {
      type: String,
      default: "Business structures accepted:",
    },
    EligibilityList1NestedList2Nested1: {
      type: String,
      default: "Incorporated in B.C. or extra-provincially registered.",
    },
    EligibilityList1NestedList2Nested2: {
      type: String,
      default:
        "Registered as a general, limited, or limited liability partnership in B.C.",
    },
    EligibilityList1NestedList3: {
      type: String,
      default:
        "Accepts applications from public sector or non-profit organizations in B.C., including:",
    },
    EligibilityList1NestedList3Nested1: {
      type: String,
      default: "Health authorities and agencies.",
    },
    EligibilityList1NestedList3Nested2: {
      type: String,
      default: "Public post-secondary education institutions.",
    },
    EligibilityList1NestedList3Nested3: {
      type: String,
      default: "Public school districts.",
    },
    EligibilityList1NestedList3Nested4: {
      type: String,
      default: "Accredited private non-profit post-secondary institutions.",
    },
    EligibilityList1NestedList3Nested5: {
      type: String,
      default: "Research institutions supported by government.",
    },
    EligibilityList1NestedList3Nested6: {
      type: String,
      default: "Government organizations and agencies.",
    },
    EligibilityList1NestedList3Nested7: {
      type: String,
      default: "Registered non-profit groups.",
    },

    EligibilityList2: {
      type: String,
      default: "Operational Requirements:",
    },
    EligibilityList2NestedList1: {
      type: String,
      default: "Must have a valid municipal business licence.",
    },
    EligibilityList2NestedList2: {
      type: String,
      default:
        "Must have operated in B.C. for at least one year (two years for BC Entry Level and Semi-Skilled Worker Stream).",
    },
    EligibilityList2NestedList3: {
      type: String,
      default: "Minimum employee requirements:",
    },
    EligibilityList2NestedList3Nested1: {
      type: String,
      default: "Metro Vancouver: 5 full-time employees.",
    },
    EligibilityList2NestedList3Nested2: {
      type: String,
      default: "Outside Metro Vancouver: 3 full-time employees.",
    },

    EligibilityList3: {
      type: String,
      default: "Compliance and Legal Considerations:",
    },
    EligibilityList3NestedList1: {
      type: String,
      default: "Application may be refused if employer or owner/director:",
    },
    EligibilityList3NestedList1Nested1: {
      type: String,
      default: "Received penalties or fines within past two years.",
    },
    EligibilityList3NestedList1Nested2: {
      type: String,
      default:
        "Under investigation or charged with criminal offence related to immigration or business operation.",
    },
    EligibilityList3NestedList2: {
      type: String,
      default: "Genuine recruitment efforts must be demonstrated.",
    },

    EligibilityList4: {
      type: String,
      default: "Disqualifications:",
    },
    EligibilityList4NestedList1: {
      type: String,
      default:
        "Employers involved in certain businesses (e.g., pornographic products, employment agencies).",
    },
    EligibilityList4NestedList2: {
      type: String,
      default: "Businesses bringing BC PNP or BC government into disrepute.",
    },

    EligibilityList5: {
      type: String,
      default: "Company Ownership Restrictions:",
    },
    EligibilityList5NestedList1: {
      type: String,
      default:
        "Applicant and family members must not have held more than 10% ownership in the BC company in past 5 years.",
    },
    EligibilityList5NestedList2: {
      type: String,
      default:
        "Family members include spouse, parents, siblings, children, and others.",
    },

    EligibilityList6: {
      type: String,
      default: "Discretionary Consideration:",
    },
    EligibilityList6NestedList1: {
      type: String,
      default:
        "BC PNP may consider applications not meeting minimum requirements based on various factors like business structure, length of operation, and employee count.",
    },
    //

    StillNotSureHeading: {
      type: String,
      default: "Still Not Sure?",
    },
    StillNotSurePara1: {
      type: String,
      default:
        "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have got approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
    },
    StillNotSurePara2: {
      type: String,
      default:
        "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa.",
    },

    WhyChooseUsHeading01: {
      type: String,
      default:
        "Why Choose Us?",
    },
    wcu1: {
      type: String,
      default:
        "<strong>Experienced Team:</strong> Over a decade of experience in handling BCPNP applications with a high success rate. ",
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
        " How can I apply for the British Columbia Provincial Nominee Program?",
    },
    qa1: {
      type: String,
      default:
        " To apply for the BC PNP, you must first create an online account with the British Columbia Provincial Nominee Program (BC PNP) website. You will then need to choose a PNP stream that you are eligible for and submit your application. Your application will be assessed by immigration officials, and you may be invited to participate in an interview. ",
    },
    q2: {
      type: String,
      default:
        " If I am refused by the British Columbia Provincial Nominee Program, can I appeal?",
    },
    qa2: {
      type: String,
      default:
        "  Yes, you can appeal the refusal on your BC PNP application. However, you must do so within 30 days of receiving the refusal letter. You will need to provide new evidence to support your appeal.",
    },

    q3: {
      type: String,
      default:
        "What is the difference between the British Columbia Provincial Nominee Program and Express Entry?",
    },
    qa3: {
      type: String,
      default:
        "The BC PNP and Express Entry are two separate immigration programs that both lead to Canadian permanent residence. However, there are some key differences between the two programs. Express Entry is a federal program that selects applicants based on a points system, while the BC PNP is a provincial program that selects applicants based on their skills and qualifications that are in demand in British Columbia.",
    },
    q4: {
      type: String,
      default:
        " Which stream of the BC PNP is right for me?",
    },
    qa4: {
      type: String,
      default:
        "  There are several different streams of the BC PNP, each with its own eligibility criteria and requirements. The best stream for you will depend on your circumstances, such as your occupation, experience level, and education background. ",
    },

    q5: {
      type: String,
      default:
        "What if my BC PNP application is refused?",
    },
    qa5: {
      type: String,
      default:
        " If your BC PNP application is refused, you will receive a written letter from the immigration office explaining the reasons for the refusal. You may be able to apply for reconsideration of your application, but this is not guaranteed. If your application is refused and you do not appeal, you can reapply. Or, for a stress-free and positive outcome, let Brightlight Immigration handle your case for you. Click here (hyperlink to https://book.brightlightimmigration.ca/calendar-rcic ).    ",
     },
    q6: {
      type: String,
      default:
        " What are the priority occupations in the BC PNP?",
    },
    qa6: {
      type: String,
      default:
        "  The BC PNP has a list of priority occupations that are in high demand in the province. If you have skills and experience in one of these occupations, you may be more likely to be successful in your BC PNP application.",
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

let bcPNPPageSection = mongoose.model("BC - PNP Page", bcpnpSchema);
module.exports = bcPNPPageSection;
