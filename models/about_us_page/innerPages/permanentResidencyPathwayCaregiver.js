let mongoose = require("mongoose");
let permanentResidencyPathwayCaregiverSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default: "Permanent Residence Pathways available for Caregivers",
    },
    description: {
      type: String,
      default:
        "The caregivers play a crucial role in contributing to the Canadian economy by providing invaluable support to families and individuals in need. The caregiver program by Immigration, Refugees and Citizenship Canada offers a pathway to permanent residency in Canada for individuals who provide the essential care.",
    },

    HerePermanentResHeading: {
      type: String,
      default:
        "Here are the permanent residence pathways available for caregivers:",
    },

    BenifitHeading: {
      type: String,
      default:
        "Benefits of Permanent Residence Pathways available for Caregivers:",
    },
    b1: {
      type: String,
      default:
        "Caregiver pathways provide you with an opportunity to apply for permanent residence, after gaining 12 months of experience in Canada.",
    },
    b2: {
      type: String,
      default:
        "The permanent residence applications do not have any points system like Express Entry or provincial nomination programs. It is based on a first-come, first-served basis.",
    },
    b3: {
      type: String,
      default:
        "The language requirements for both work permit and permanent residency application are very low.",
    },
    b4: {
      type: String,
      default:
        "The spouse and dependent children can accompany you throughout the process.",
    },

    eligibleCriteriaHeading: {
      type: String,
      default:
        "Eligibility criteria for Permanent Residence Pathways available for Caregivers:",
    },
    eligibileSubHead1: {
      type: String,
      default: "1. Qualifying Occupations:",
    },
    eligibileSubHead1Para: {
      type: String,
      default:
        "In the caregiver program, only two occupations are allowed for the purpose of defining the occupation mentioned in the job offer as well as the in-Canada qualify work experience to apply for permanent residency:",
    },
    NocListHeading: {
      type: String,
      default: "The two National Occupational Classification (NOC) codes are:",
    },
    ec1: {
      type: String,
      default:
        "<strong>NOC 44100: Home childcare providers </strong>- If you care for the well-being and physical and social development of children, then you qualify for this NOC code. Nanny, babysitter, and parent’s helper are included in this NOC. Foster parents, babysitters at a fitness center or a shopping center are not included in this NOC.",
    },

    ec2: {
      type: String,
      default:
        "<strong>NOC 44101: Home support workers  </strong>- If you provide personal care and companionship for seniors, persons with disabilities, and convalescent clients in the employer’s home, then you qualify for this NOC code. If you are employed at a nursing home or other such institution, you do not qualify for this NOC.",
    },
    eligibileSubHead2: {
      type: String,
      default: "2. Application Categories:",
    },
    eligibileSubHead2Para: {
      type: String,
      default: "There are 2 categories you can apply under:",
    },
    ec3: {
      type: String,
      default:
        "a. Applicants without 12 months of Qualifying Canadian work experience (Category A – Gaining experience)",
    },
    ec4: {
      type: String,
      default:
        "b. Applicants with 12 months of Qualifying Canadian work experience (Category B – Direct to permanent residence)",
    },

    eligibileSubHead3: {
      type: String,
      default: "3. Education:",
    },
    eligibileSubHead3Para: {
      type: String,
      default: "You are required have either of the following:",
    },

    ec5: {
      type: String,
      default:
        "Canadian 1-year post-secondary (or higher) educational credential",
    },
    ec6: {
      type: String,
      default:
        "1-year post-secondary outside Canada education program, equivalent to Canadian 1-year post-secondary (or higher) educational credential, with Educational Credential Assessment (ECA) report issued for immigration purposes by an organization designated by IRCC, within the last 5 years.",
    },

    eligibileSubHead4: {
      type: String,
      default: "4. Language requirements:",
    },
    ec7: {
      type: String,
      default: "CLB 5 in reading, writing, speaking, and listening.",
    },
    ec8: {
      type: String,
      default: "IELTS: reading-4, writing-5, speaking-5, and listening-5",
    },
    ec9: {
      type: String,
      default: "CELPIP-G: 5 in reading, writing, speaking, and listening.",
    },
    ec10: {
      type: String,
      default:
        "PTE: reading-(42-50), writing-(51-59), speaking-(51-58), and listening-(39-49)",
    },

    eligibileSubHead5: {
      type: String,
      default:
        "5. Qualifying Canadian work experience and permanent residency application categories:",
    },
    eligibileSubHead5Head1: {
      type: String,
      default: "Applicants under Category A – Gaining experience:",
    },
    eligibileSubHead5Para1: {
      type: String,
      default:
        "If you are a permanent residency applicant without 12 months of Qualifying Canadian work experience (Category A – Gaining experience), then you will be issued an occupation-restricted open work permit (OROWP). Within 36 months of the OROWP being issued, you are required to submit proof of at least 12 months of authorized full-time work experience. You will also be required to provide the following with the application:",
    },
    ec11: {
      type: String,
      default:
        "An employment offer from a qualifying Canadian employer in either NOC 44101: Home support workers or NOC 44100: Home childcare providers.",
    },
    ec12: {
      type: String,
      default:
        "Documents from the home country to prove that you can perform the job duties mentioned in the employment offer such as employer reference letters, employment records, work contracts, pay stubs, copies of relevant education credentials or training, which can include diplomas or certificates training.",
    },

    eligibileSubHead5Head2: {
      type: String,
      default: "Applicants under Category B – Direct to Permanent residence:",
    },
    eligibileSubHead5Para2: {
      type: String,
      default:
        "If you are a permanent residency applicant with 12 months of Qualifying Canadian work experience (Category B – Direct to permanent residence), then you submit the documents to prove your work experience upfront.",
    },

    howToApplyHeading: {
      type: String,
      default:
        "How to apply for Permanent Residence Pathways available for Caregivers?",
    },
    ha1: {
      type: String,
      default:
        "Select the right program as per your qualifications - HCCP or HSWP",
    },
    ha2: {
      type: String,
      default:
        "Choose the right category - Category A (gaining experience) or Category B (Direct to PR), depending upon your situation",
    },
    ha3: {
      type: String,
      default:
        "Apply for education credential evaluation of your education program if studied outside Canada.",
    },
    ha4: {
      type: String,
      default: "Appear for an acceptable English test.",
    },

    NowApplyGainHeading: {
      type: String,
      default:
        "Now if you are applying to Gaining Experience category of Caregiver pilot:",
    },
    ge1: {
      type: String,
      default:
        "If you do not have qualifying Canadian experience, look for a genuine job offer.",
    },
    ge2: {
      type: String,
      default:
        "Complete your work permit and PR application after ensuring IRCC is still accepting applications for either HCCP or HSWP.",
    },
    ge3: {
      type: String,
      default: "Provide medical exam sheet and police clearance to IRCC.",
    },
    ge4: {
      type: String,
      default: "Pay IRCC fees and submit the application.",
    },
    ge5: {
      type: String,
      default:
        "You will receive an occupation-restricted open work permit (OROWP) and letter of introduction for a work permit for port of entry.",
    },
    ge6: {
      type: String,
      default:
        "Get 12 months of qualifying work experience in Canada within 36 months of receiving OROWP.",
    },
    ge7: {
      type: String,
      default: "Provide proof of work experience to IRCC.",
    },

    NowApplyDirectHeading: {
      type: String,
      default:
        "Now if you are applying to Gaining Experience category of Caregiver pilot:",
    },
    dc1: {
      type: String,
      default:
        "If you have qualifying Canadian experience of 12 months, prepare PR application after ensuring IRCC is still accepting applications for either HCCP or HSWP.",
    },
    dc2: {
      type: String,
      default: "Provide medical exam sheet and police clearance to IRCC.",
    },
    dc3: {
      type: String,
      default: "Pay IRCC fees and submit the application.",
    },
    dc4: {
      type: String,
      default:
        "Apply for Bridging Open Work Permit if your current work permit is expiring.",
    },

    StillNotSureHeading: {
      type: String,
      default: "Still not sure?",
    },
    StillNotSurePara1: {
      type: String,
      default:
        "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. While we don't provide jobs for LMIA, we can certainly assist you if you have a job offer. We have obtained approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
    },
    StillNotSurePara2: {
      type: String,
      default:
        "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Start your process now.",
    },

    ScrollHeading1: {
      type: String,
      default: " <strong>(Category A – Gaining experience)</strong> for Home Child-Care Provider Pilot and Home Support Worker Pilot - Scroll to section Below ",
    },
    ScrollHeading2: {
      type: String,
      default: "  <strong>(Category B – Direct to permanent residence)</strong> for Home Child-Care Provider Pilot and Home Support Worker Pilot Scroll to section Below",
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
        " Do I need to be employed at the time of permanent residency application? ",
    },
    qa1: {
      type: String,
      default:
        " No, you do not have to be employed at the time you submit your permanent residency application through the Home Child Care Provider Pilot or Home Support Worker Pilot.",
    },
    q2: {
      type: String,
      default:
        "   Is vacation allowed while I am working for my employer as a Home Childcare Provider or Home Support Worker?",
    },
    qa2: {
      type: String,
      default:
        "Yes, of course. Keep in mind a reasonable period of vacation time (such as 2 weeks of paid vacation within 1 year of period) is counted towards the qualifying work experience requirements. meeting the work experience requirement.  ",
    },

    q3: {
      type: String,
      default:
        "Do I need to continuously work for 12 months to qualify for Home Childcare Provider Pilor or Home Support Worker Pilot?  ",
    },
    qa3: {
      type: String,
      default:
        "No, you do not have to work continuously, and breaks are allowed to qualify for 2 month of work experience. However, do not count any extended breaks or period of unemployment while calculating the number of months of qualifying work experience. ",
    },
    q4: {
      type: String,
      default:
        " Will my work experience as a Home Childcare Provider or Home Support Worker qualify while I was studying full-time in Canada? ",
    },
    qa4: {
      type: String,
      default:
        " No, if you were enrolled in full-time studies while working as a Home Childcare Provider or Home Support Worker in Canada, this time period cannot be counted for qualifying work experience.  ",
    },

    q5: {
      type: String,
      default:
        "Can I get a caregiver job offer from my relative? ",
    },
    qa5: {
      type: String,
      default:
        " Yes, a family member or a relative can offer you the caregiver job. Being related to your employer does not make you ineligible to apply. IRCC will review all circumstances of the application to ensure eligibility, genuineness of the job offer and employer/employee relationship.",
     },
    q6: {
      type: String,
      default:
        " Can I offer caregiver job to my relative?",
    },
    qa6: {
      type: String,
      default:
        " Yes, you can hire a relative for the position of caregiver after obtaining a positive Labour Market Impact Assessment (LMIA).",
    },

    q7: {
      type: String,
      default:
        "   ",
    },
    qa7: {
      type: String,
      default:
        "   ",
    },

    q8: {
      type: String,
      default:
        " ",
    },
    qa8: {
      type: String,
      default:
        "   ",
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

let permanentResidencyPathwayCaregiverSection = mongoose.model(
  "permanent Residency Pathway Caregiver Page",
  permanentResidencyPathwayCaregiverSchema
);
module.exports = permanentResidencyPathwayCaregiverSection;
