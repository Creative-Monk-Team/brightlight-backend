let mongoose = require("mongoose");
let comLawPartPermanSchema = mongoose.Schema(
  {
    comLawPartPermanHeading: {
      type: String,
      default: "Open Work Permit for Spouse or Common-law Partner of a Permanent Resident/Canadian Citizen",
    },
    comLawPartPermanPerPara1: {
      type: String,
      default:
        "The processing time for a PR application can be longer than usually expected. There are various reasons for this to happen. The common scenarios for application delays are applications stuck in background checks, requests for additional medical examinations, poor staffing at the country of citizenship, security clearance delays, etc. The good thing is you can apply for authorization to work while waiting for your permanent residency application to be processed.",
    },
    comLawPartPermanPerPara2: {
        type: String,
        default:
          "You can apply for this type of open work permit if you’ve applied for permanent residence under one of the following classes:",
      },

      comLawPartPermanPerLi1: {
        type: String,
        default:
          "The spouse or common-law partner in Canada class (SCLPC) as a spouse or common-law partner.",
      },
      
      comLawPartPermanPerLi2: {
        type: String,
        default:
          "The family class as a spouse, common-law, or conjugal partner (sponsored overseas).",
      },  
  
//


BenifitHeading: {
    type: String,
    default: "Benefits of Open Work Permit for Spouse or Common-law Partner of a Permanent Resident/Canadian Citizen",
  },
  
b1: {
  type: String,
  default: "It permits your spouse or common-law partner to work, alleviating financial strain on you.",
},
b2: {
  type: String,
  default: "It provides your spouse or common-law partner with the opportunity to gain Canadian work experience.",
},
b3: {
    type: String,
    default: "They have the flexibility to work for any employer and in any position.",
  },
  b4: {
    type: String,
    default: "They can also establish their own business if desired.",
  },
  b5: {
    type: String,
    default: "Unlike visitors, they are allowed to stay in Canada for longer than six months, with multiple entries allowed.",
  },
  b6: {
    type: String,
    default: "The dependent child can also accompany.",
  },

///

////

EligibilityHeading: {
    type: String,
    default: "Eligibility criteria of Open Work Permit for Spouse or Common-law Partner of a Permanent Resident/Canadiancitizen:",
  },

e1: {
  type: String,
  default: "Both the sponsor and principal applicant must be in a genuine relationship with each other.",
},
e2: {
  type: String,
  default: "Provide application fees receipt or Acknowledgement of Receipt (AOR) of your permanent residence application.",
},
e3: {
    type: String,
    default: "Both the sponsor and principal applicant must be living together.",
  },
  e4: {
    type: String,
    default: "If your spouse doesn’t have valid temporary resident status, they must wait until you’ve received your approval in principle letter.",
  },
  ////
  /////
  HowApplyHeading: {
      type: String,
      default: "How to apply for Open Work Permit for Spouse or Common-law Partner of a Permanent Resident/Canadiancitizen?",
    },
    HowApplySubHead: {
        type: String,
        default: "The list of documents needed for a Canadian spousal open work permit will depend on the category you're applying under and your individual circumstances. However, here's a general list of documents you might need to provide:",
      },
      ha1:{
        type: String,
        default: "Identify the principal applicant’s occupation in TEER category 0, 1, 2, or 3 of the National Occupation Classification system.",
      },
      ha2:{
        type: String,
        default: "Gather documents to prove the above-mentioned eligibility criteria.",
      },
      ha3:{
        type: String,
        default: "Gather documents to prove that your relationship is genuine.",
      },
      ha4:{
        type: String,
        default: "You might be required to get a medical exam and police clearance certificates, if applying from outside Canada.",
      },
      ha5:{
        type: String,
        default: "Submit a complete application to IRCC.",
      },
      ha6:{
        type: String,
        default: "After receiving the Biometric Collection Instruction letter, make an appointment for biometrics within 30 days of receiving the letter.",
      },
      ha7:{
        type: String,
        default: "Wait for IRCC to process your application.",
      },
///
     RefusalHeading: {
       type: String,
       default: "Common reasons for refusals of Open Work Permit for Spouse or Common-law Partner of a Permanent Resident/Canadiancitizen:",
  },

r1: {
    type: String,
    default: "Lack of documentation verifying the National Occupational Classification (NOC) of the principal applicant.",
},

r2: {
    type: String,
    default: "Inadequate evidence demonstrating the genuineness of the marriage.",
},
r3: {
    type: String,
    default: "The principal applicant is employed in a low-skill occupation under the low wage stream of LMIA.",
},
r4: {
    type: String,
    default: "The principal applicant's work permit is nearing expiration, and there has been no application filed to extend their stay.",
},
//
      NeedAssisHeading: {
        type: String,
        default: "Need Assistance?",
      },
      NeedAssisPara: {
        type: String,
        default: "If you need help with your application or have received a refusal, our experienced team at Brightlight Immigration can assist you. We specialize in handling complex cases and offer tailored solutions to increase your chances of approval.",
      },

      //
      WhyChooseUsHeading: {
        type: String,
        default: "Why Choose Us?",
      },
      WhyChooseUsPara: {
        type: String,
        default:
          "At Brightlight Immigration, we provide expert guidance and support throughout your immigration journey. Our dedicated team is committed to achieving the best possible outcomes for our clients.",
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
          " Can I work while on visitor status and have applied for SOWP? ",
      },
      qa1: {
        type: String,
        default:
          "No, you cannot. You will have to wait for the approval of work permit before you can apply. ",
      },
      q2: {
        type: String,
        default:
          " How long does it take to get a spouse open work permit in Canada?  ",
      },
      qa2: {
        type: String,
        default:
          " Within Canada, the application takes 45 days to 4 months to process. ",
      },
  
      q3: {
        type: String,
        default:
          " I am a study permit holder, can I get married to a Permanent Resident/Canadian citizen convert my study permit to a work permit? ",
      },
      qa3: {
        type: String,
        default:
          " Yes, you can. You will have to apply for spousal application and then",
      },
      q4: {
        type: String,
        default:
          "Since I&#39;m currently banned from applying for spousal sponsorship due to a previous undertaking regarding sponsoring my ex-spouse, could my current spouse apply for an open work permit in the meantime?  ",
      },
      qa4: {
        type: String,
        default:
          "  No, your spouse can only apply for an open work permit once you have submitted the application for spousal sponsorship. You will have to wait for 3 years from the date your previous spouse became PR, submit new sponsorship application, and then apply for SOWP for the new spouse. ",
      },
  
      q5: {
        type: String,
        default:
          " How long will my spouse&#39;s work permit be for?",
      },
      qa5: {
        type: String,
        default:
          "Work permits for a spouse or common-law partner are usually valid for one year and can be extended. ",
       },
      q6: {
        type: String,
        default:
          "Does my spouse need a job offer to apply for SOWP? ",
      },
      qa6: {
        type: String,
        default:
          "No, the spouse/partner does not need a job offer or employment letter to apply. ",
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
    timeStamps: true,
  }
);

let comLawPartPermanSection = mongoose.model(
  "Common-law Partner of a Permanent Resident program",
  comLawPartPermanSchema
);
module.exports = comLawPartPermanSection;
