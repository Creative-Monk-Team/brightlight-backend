let mongoose = require("mongoose");
let igpSchema = mongoose.Schema(
  {
    Heading: {
      type: String,
      default:
        "British Columbia Provincial Nominee Program International Graduate stream",
    },
    Description: {
      type: String,
      default:
        "The British Columbia International Graduate stream is one of the immigration pathways offered within the British Columbia Provincial Nominee Program (BC PNP). Operated by the province of British Columbia, the BC PNP aims to nominate skilled immigrants for permanent residence in Canada. The BC International Graduate stream prioritizes candidates who have completed post-secondary education in Canada and have received an offer for skilled employment.",
    },

    //
    BenifitsHeading: {
      type: String,
      default: "Benefits of BCPNP International Graduate Stream",
    },

    BenifitsList1: {
      type: String,
      default:
        "Nomination Priority: Successful candidates receive an invitation to apply for Canadian permanent residence.",
    },
    BenifitsList2: {
      type: String,
      default:
        "No Express Entry Profile Required: No need for an Express Entry profile.",
    },
    BenifitsList3: {
      type: String,
      default:
        "Accelerated Processing: Option to apply through Express Entry for faster processing.",
    },

    //
    EligibilityHeading: {
      type: String,
      default: "Eligibility Criteria for International Graduate Stream",
    },

    EligibilitySubHead: {
      type: String,
      default: "First you must be eligible with BCPNP Skilled Worker Program",
    },
    EligibilityList1: {
      type: String,
      default: "1. Job Offer",
    },
    EligibilityList1NestedList1: {
      type: String,
      default:
        "You must hold an indeterminate, full-time job offer from an eligible BC employer.",
    },
    EligibilityList1NestedList2: {
      type: String,
      default:
        "The job offer should fall under NOC TEER Categories 1, 2, or 3.",
    },
    EligibilityList1NestedList3: {
      type: String,
      default:
        "If the job offer is in an eligible tech occupation or falls under NOC 41200 (university professors and lecturers), it does not need to be indeterminate.",
    },
    EligibilityList1NestedList4: {
      type: String,
      default:
        "The wage must be at market rate and comparable to similar roles in BC.",
    },
    EligibilityList1NestedList5: {
      type: String,
      default:
        "Additional qualification requirements may apply based on the NOC code of the job offer.",
    },

    EligibilityList2: {
      type: String,
      default: "2. Education",
    },
    EligibilityList2NestedList1: {
      type: String,
      default:
        "You need a degree, diploma, or certificate from an eligible Canadian post-secondary institution.",
    },
    EligibilityList2NestedList2: {
      type: String,
      default:
        "The degree or diploma program completion date should be within the last three years from the date on your official transcript.",
    },
    EligibilityList2NestedList3: {
      type: String,
      default:
        "Undergraduate or graduate degrees must be from authorized institutions that can grant degrees.",
    },
    EligibilityList2NestedList4: {
      type: String,
      default:
        "Diplomas and certificates must be from public post-secondary institutions in Canada (private institutions are not eligible).",
    },
    EligibilityList2NestedList5: {
      type: String,
      default:
        "Language training and programs shorter than 8 months (excluding internships and co-op terms) do not qualify.",
    },

    EligibilityList3: {
      type: String,
      default: "3. Language Proficiency",
    },
    EligibilityList3NestedList1: {
      type: String,
      default:
        "If the job offer’s NOC code is TEER Category 1, language results are not mandatory for eligibility (although BCPNP may still request a language test).",
    },
    EligibilityList3NestedList2: {
      type: String,
      default:
        "For TEER Categories 2 or 3, you need a Canadian Language Benchmark (CLB) score of at least 4.",
    },

    EligibilityList4: {
      type: String,
      default: "4. Minimum Income Requirements",
    },
    EligibilityList4NestedList1: {
      type: String,
      default:
        "You must demonstrate that your gross annual wage in the job offer meets minimum income requirements.",
    },
    EligibilityList4NestedList2: {
      type: String,
      default:
        "These requirements vary based on your location of residence in BC and the number of dependents.",
    },
    EligibilityList4Remember: {
      type: String,
      default:
        "Remember that meeting these eligibility criteria does not guarantee an invitation to apply; invitations are based on threshold scores during draws. If your score meets or exceeds the threshold, you’ll receive an invitation to apply from the BCPNP.",
    },

    ReqExpressHeading: {
      type: String,
      default: "Requirements for the Express Entry Category",
    },
    ReqExpressDesc: {
      type: String,
      default:
        "To be eligible for the International Graduates (IG) stream, you must qualify under one of the three federal programs. To understand the eligibility criteria for these programs, click on either the:",
    },
    EmpRequirementsHeading: {
      type: String,
      default: "Employer’s Eligibility Requirements",
    },

    EmpRequirementsDescription: {
      type: String,
      default:
        "As a British Columbia employer participating in the BC Skilled Worker program, ensure you:",
    },
    EmpRequirementsList1: {
      type: String,
      default: "Established in B.C.",
    },
    EmpRequirementsList2: {
      type: String,
      default: "Comply with domestic labor market recruitment.",
    },
    EmpRequirementsList3: {
      type: String,
      default: "At least 1 year in operation in BC.",
    },
    EmpRequirementsList4: {
      type: String,
      default:
        "Minimum full-time employees: Metro Vancouver (5), Outside Metro Vancouver (3).",
    },
    EmpRequirementsList5: {
      type: String,
      default: "Offer full-time, permanent employment.",
    },
    EmpRequirementsList6: {
      type: String,
      default: "Align wages with industry standards.",
    },
    EmpRequirementsList7: {
      type: String,
      default: "Submit required documentation and forms.",
    },
    EmpRequirementsList8: {
      type: String,
      default: "Adhere to all relevant laws and regulations.",
    },

    ApplicationHeading: {
      type: String,
      default:
        "Application Process for British Columbia Provincial Nominee Program International Graduate Stream application",
    },
    ApplyPoint1: {
      type: String,
      default: "Expression of Interest (EOI) System:",
    },
    ApplyPoint1List1: {
      type: String,
      default:
        "The British Columbia International Graduate stream operates on an Expression of Interest (EOI) system.",
    },
    ApplyPoint1List2: {
      type: String,
      default:
        "Candidates who meet the minimum stream requirements can register a profile using the BC’s online immigration portal.",
    },

    ApplyPoint2: {
      type: String,
      default: "Profile Registration:",
    },
    ApplyPoint2List1: {
      type: String,
      default:
        "Candidates must indicate on their BC profile whether they are applying through:",
    },
    ApplyPoint2List1Nested1: {
      type: String,
      default: "The accelerated Express Entry system, or",
    },
    ApplyPoint2List1Nested2: {
      type: String,
      default: "The regular non- Express Entry Skills Immigration system.",
    },
    ApplyPoint2List2: {
      type: String,
      default:
        "Once the profile has been submitted, candidates will be assigned a score and ranked against one another using the BC Skills Immigration Ranking System.",
    },

    ApplyPoint3: {
      type: String,
      default: "Invitation to Apply (ITA):",
    },
    ApplyPoint3List1: {
      type: String,
      default:
        "The highest ranking candidates will be invited to apply to the stream in one of the stream’s periodic intakes.",
    },
    ApplyPoint3List2: {
      type: String,
      default:
        "Candidates must submit a complete application to the stream within 30 days from when they receive the invitation to apply.",
    },

    ApplyPoint4: {
      type: String,
      default: "Application Fee:",
    },
    ApplyPoint4List1: {
      type: String,
      default:
        "The BC International Graduate stream charges a $1,475 CAD application fee per applicant.",
    },

    ApplyPoint5: {
      type: String,
      default: "Provincial Nomination:",
    },
    ApplyPoint5List1: {
      type: String,
      default:
        "If the application is approved, the candidate will be issued a provincial nomination for permanent residence from BC.",
    },
    ApplyPoint5List2: {
      type: String,
      default:
        "Candidates can also request to receive a letter of support for a temporary work permit, allowing them to begin working in Canada while their application for permanent residence is processed.",
    },
    ApplyPoint5List3: {
      type: String,
      default:
        "Applying for a work permit with a letter of support from a province represents a separate application to IRCC.",
    },

    ApplyPoint6: {
      type: String,
      default: "Express Entry Stream:",
    },
    ApplyPoint6List1: {
      type: String,
      default:
        "If the applicant indicated on their BC profile that they were applying to the BC Skilled Worker stream through Express Entry, they will receive a notification of nomination on their IRCC online account.",
    },
    ApplyPoint6List2: {
      type: String,
      default:
        "After accepting the provincial nomination, the applicant’s Comprehensive Ranking System (CRS) score will increase by 600 points, virtually guaranteeing they will receive an Invitation to Apply (ITA) for permanent residence in the next Express Entry draw.",
    },
    ApplyPoint6List3: {
      type: String,
      default:
        "After receiving an ITA, the applicant must prepare and submit an official application for Canadian permanent residence within the designated timeframe. Applications for permanent residence submitted through Express Entry are generally processed within six months.",
    },

    ApplyPoint7: {
      type: String,
      default: "Regular Skills Immigration System:",
    },
    ApplyPoint7List1: {
      type: String,
      default:
        "If the applicant indicated on their BC profile that they were applying to the BC International Graduate stream through the regular Skills Immigration system, the applicant has six months to submit an official application for permanent residence online.",
    },

    //

    StillNotSureHeading: {
      type: String,
      default: "Still Not Sure?",
    },
    StillNotSurePara1: {
      type: String,
      default:
        "Contact Brightlight Immigration to assess your profile and start your journey towards Canadian permanent residence. With a high approval rate and a tailored approach, we handle BCPNP International Post-Graduate Stream cases with expertise.",
    },
    StillNotSurePara2: {
      type: String,
      default: "",
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
        " What percentage of your studies must have been completed within Canada to be eligible for the BC PNP?",
    },
    qa1: {
      type: String,
      default:
        "  At least 50% of your studies must have been completed within Canada to be eligible for the BC PNP?",
    },
    q2: {
      type: String,
      default:
        " Are distance education learning programs, whether from abroad or within Canada, considered eligible for the BC PNP? ",
    },
    qa2: {
      type: String,
      default:
        " No, distance education learning programs, whether from abroad or within Canada, are not eligible for BCPNP.  ",
    },

    q3: {
      type: String,
      default:
        " Is there an exception to the eligibility criteria regarding distance education due to the impact of Covid- 19? If so, what is it?",
    },
    qa3: {
      type: String,
      default:
        " Because of the Covid-19 pandemic, online coursework completed between January 2020 and June 2023 as a component of a qualifying program of study for the BC PNP while residing in Canada is deemed eligible.",
    },
    q4: {
      type: String,
      default:
        "Are educational credentials granted by campuses of Canadian institutions located outside of Canada considered eligible for the BC PNP? ",
    },
    qa4: {
      type: String,
      default:
        " No, the educational credentials granted by campuses of Canadian institutions located outside of Canada considered eligible for the British Columbia Provincial Nominee Program International Graduate Stream application.   ",
    },

    q5: {
      type: String,
      default:
        "What is the minimum duration of coursework required for eligibility in the program? ",
    },
    qa5: {
      type: String,
      default:
        " Your program must be of at least 8 months of full-time equivalent coursework. ",
     },
    q6: {
      type: String,
      default:
        " Does participation in co-op work terms, practicums, or internships contribute towards fulfilling the coursework requirement? ",
    },
    qa6: {
      type: String,
      default:
        "  No, Co-op work terms, practicums, and internships will not be considered as part of the 8-month requirement for full-time equivalent coursework.",
    },

    q7: {
      type: String,
      default:
        "How many semesters of full-time equivalent coursework are necessary to meet the minimum requirement? ",
    },
    qa7: {
      type: String,
      default:
        "  At least 2 semesters of full-time equivalent coursework are required for British Columbia Provincial Nominee Program International Graduate Stream application.  ",
    },

    q8: {
      type: String,
      default:
        " At least 2 semesters of full-time equivalent coursework are required for British Columbia Provincial Nominee Program International Graduate Stream application.",
    },
    qa8: {
      type: String,
      default:
        "You are required to apply for registration with the BC PNP within three years of your graduation date. ",
    },
    
    q9: {
      type: String,
      default:
        " Can I count my work experience that I gained while on a study permit towards British Columbia Provincial Nominee Program International Graduate stream?",
    },
    qa9: {
      type: String,
      default:
        "  The student work experience that is not part of a paid co-op work term does not count towards directly related work experience points.",
    },
    q10: {
      type: String,
      default:
        " Can an employer operating as sole proprietors offer support and recommendation for BCPNP?",
    },
    qa10: {
      type: String,
      default:
        "At its sole discretion, the BC PNP may consider an application where the supporting employer does not meet the minimum requirements, including but not limited to the company’s business structure, such as sole proprietorships. However, to be considered, the supporting employer must, at the time of application, make a compelling business case in writing to the BC PNP that demonstrates how the nomination will generate significant economic benefit to B.C. ",
    },
    q11: {
      type: String,
      default:
        "For BCPNP one of the requirements for employment is that there should be minimum 3 full time or equivalent part time employees working for that employer who has provided the job offer, if outside of metro Vancouver. Do those 3 include the PNP applicant as well? ",
    },
    qa11: {
      type: String,
      default:
        " If you, as the applicant, are currently working for the employer supporting your application, you may count yourself as well as other PNP applicants towards the minimum number of full-time employees for the purposes of this requirement.",
    },
    q12: {
      type: String,
      default:
        " Is it possible to include employees from various locations of the same employer that supports the BC PNP within British Columbia?",
    },
    qa12: {
      type: String,
      default:
        " Only individuals who are on your supporting employer’s payroll will be considered employees of the company. Your employer may be asked to submit additional supporting documentation, such as a T4 Summary of Remuneration Paid, to demonstrate that this requirement is met.",
    },
    q13: {
      type: String,
      default:
        "What is the minimum number of years in operation my employer must be in operation for supporting my BCPNP Entry Level and Semi-Skilled (ELSS) stream application? ",
    },
    qa13: {
      type: String,
      default:
        " The employer who is supporting your British Columbia Provincial Nominee Program International Graduate stream application must have been operating in BC for at least one year.",
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

let internationalGraduateProgramSection = mongoose.model(
  "International Graduate Program Page",
  igpSchema
);
module.exports = internationalGraduateProgramSection;
