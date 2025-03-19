let mongoose = require("mongoose");
let OpenWorkPermitForSpouseSchema = mongoose.Schema(
  {
    OpenWorkPermitForSpouseHeading: {
      type: String,
      default: "Open Work Permit for Spouse or Common-law Partner of a Permanent Resident/Canadian Citizen",
    },
    OpenWorkPermitForSpousePara: {
      type: String,
      default:
        "The processing time for a PR application can be longer than usually expected. There are various reasons for this to happen. The common scenarios for application delays are - applications stuck in background checks, requests for additional medical examinations, poor staffing at the country of citizenship, security clearance delays, etc. The good thing is you can apply for authorization to work while waiting for your permanent residency application to be processed.",
    },
    OpenWorkPerSpouListHead: {
        type: String,
        default:
          "You can apply for this type of open work permit if you’ve applied for permanent residence under one of the following classes:",
      },
      OpenWorkPerSpouLi1: {
        type: String,
        default:
          "the spouse or common-law partner in Canada class (SCLPC) as a spouse or common-law partner",
      },
      OpenWorkPerSpouLi2: {
        type: String,
        default:
          "the family class as a spouse, common-law or conjugal partner (sponsored overseas)",
      },

    //
    BenifitsHeading: {
        type: String,
        default: "Benefits of Open Work Permit for Spouse or Common-law Partner of a Permanent Resident/Canadian Citizen:",
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
    //

        //
        EligibilityHeading: {
            type: String,
            default: "Eligibility criteria of Open Work Permit for Spouse or Common-law Partner of a Permanent Resident/Canadian Citizen:",
          },

          EligLi1: {
            type: String,
            default: "Both the sponsor and principal applicant must be in a genuine relationship with each other.",
          }, 
          EligLi2: {
            type: String,
            default: "Provide application fees receipt or Acknowledgement of Receipt (AOR) of your permanent residence application.",
          }, 
          EligLi3: {
            type: String,
            default: "Both the sponsor and principal applicant must be living together.",
          }, 
          EligLi4: {
            type: String,
            default: "If your spouse doesn’t have valid temporary resident status, they must wait until you’ve received your approval in principle letter.",
          }, 

       

    HowApplyHeading: {
      type: String,
      default: "How to apply for an Open Work Permit for Spouse or Common-law Partner of a Permanent Resident/Canadian Citizen?",
    },

    ha1: {
      type: String,
      default:
        "Identify the principal applicant’s occupation in TEER category 0, 1, 2 or 3 of the National Occupation Classification system.",
    },
    ha2: {
      type: String,
      default:
        "Gather documents to prove above-mentioned eligibility criteria.",
    },
    ha3: {
      type: String,
      default:
        "Gather documents to prove that your relationship is genuine",
    },
    ha4: {
      type: String,
      default:
        "You might be required to get a medical exam and police clearance certificates, if applying from outside Canada.",
    },
    ha5: {
        type: String,
        default:
          "Submit a complete application to IRCC.",
      },
      ha6: {
        type: String,
        default:
          "After receiving, Biometric Collection Instruction letter, make an appointment for biometrics within 30 days of receiving the letter.",
      },
      ha7: {
        type: String,
        default:
          "Wait for IRCC to process your application.",
      },

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
        default: "The principal applicant is employed in a low skill occupation under the low wage stream of LMIA.",
      },
      r4: {
        type: String,
        default: "The principal applicant's work permit is nearing expiration, and there has been no application filed to extend their stay.",
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
          " ",
      },
      qa1: {
        type: String,
        default:
          " ",
      },
      q2: {
        type: String,
        default:
          "  ",
      },
      qa2: {
        type: String,
        default:
          " ",
      },
  
      q3: {
        type: String,
        default:
          "  ",
      },
      qa3: {
        type: String,
        default:
          "  ",
      },
      q4: {
        type: String,
        default:
          "  ",
      },
      qa4: {
        type: String,
        default:
          "  ",
      },
      q5: {
        type: String,
        default:
          " ",
      },
      qa5: {
        type: String,
        default:
          " ",
      },
      q6: {
        type: String,
        default:
          "  ",
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
          " .",
      },
  
      q8: {
        type: String,
        default:
          "  ",
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
          "  ",
      },
      qa10: {
        type: String,
        default:
          "  ",
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

let OpenWorkPermitForSpouseSection = mongoose.model(
  "Open Work Permit For Spouse Inland Section",
  OpenWorkPermitForSpouseSchema
);
module.exports = OpenWorkPermitForSpouseSection;
