let mongoose = require("mongoose");
let agricultureStreamLmiaSchema = mongoose.Schema(
  {
    AgriculturStreamHeading: {
      type: String,
      default: "Agricultural Stream LMIA",
    },
    AgriculturStreamPara: {
      type: String,
      default:
        "This type of LMIA allows employers to hire foreign workers to fill jobs in farms, nurseries, or greenhouses. It can involve the operation of agricultural machinery, caring for and breeding of animals, and planting & harvesting various crops, trees, sods, etc.",
    },
    AgriculturStreamSubHeading: {
      type: String,
      default: "To qualify for this stream, employers must meet 2 criteria:",
    },
    AgriculturStreamSubList1: {
      type: String,
      default:
        "Production must be in specific commodity sectors from the list below, and",
    },
    AgriculturStreamSubList2: {
      type: String,
      default: "The activity must be related to on-farm primary agriculture",
    },

    //

    NOCCodesHeading: {
      type: String,
      default: "NOC Codes",
    },
    NocCodeIHeading: {
      type: String,
      default: "NOC CODE",
    },
    OccupationTitleIHeading: {
      type: String,
      default: "OCCUPATION TITLE",
    },

    NocCodeInnerHeading1: {
      type: String,
      default: "80020",
    },
    NocCodeInnerHeading2: {
      type: String,
      default: "80021",
    },
    NocCodeInnerHeading3: {
      type: String,
      default: "82030",
    },
    NocCodeInnerHeading4: {
      type: String,
      default: "82031",
    },
    NocCodeInnerHeading5: {
      type: String,
      default: "84120",
    },
    NocCodeInnerHeading6: {
      type: String,
      default: "85100",
    },
    NocCodeInnerHeading7: {
      type: String,
      default: "85101",
    },
    NocCodeInnerHeading8: {
      type: String,
      default: "85103",
    },

    OccupationTitleInnerHeading1: {
      type: String,
      default: "Managers in agriculture",
    },
    OccupationTitleInnerHeading2: {
      type: String,
      default: "Managers in horticulture",
    },
    OccupationTitleInnerHeading3: {
      type: String,
      default: "Agricultural service contractors and farm supervisors",
    },
    OccupationTitleInnerHeading4: {
      type: String,
      default:
        "Contractors and supervisors, landscaping, grounds maintenance, and horticulture services",
    },
    OccupationTitleInnerHeading5: {
      type: String,
      default: "Specialized livestock workers and farm machinery operators",
    },
    OccupationTitleInnerHeading6: {
      type: String,
      default: "Livestock labourers",
    },
    OccupationTitleInnerHeading7: {
      type: String,
      default: "Harvesting labourers",
    },
    OccupationTitleInnerHeading8: {
      type: String,
      default: "Nursery and greenhouse laborers",
    },

    //
    NatComListIHeading: {
      type: String,
      default: "National Commodity List",
    },
    NCL1: {
      type: String,
      default: "Apiary products",
    },
    NCL2: {
      type: String,
      default:
        "Fruits, vegetables (including canning/processing of these products if grown on the farm)",
    },
    NCL3: {
      type: String,
      default: "Mushrooms",
    },
    NCL4: {
      type: String,
      default: "Flowers",
    },
    NCL5: {
      type: String,
      default:
        "Nursery-grown trees including Christmas trees, greenhouses/nurseries",
    },
    NCL6: {
      type: String,
      default: "Pedigreed canola seed",
    },
    NCL7: {
      type: String,
      default: "Seed corn",
    },
    NCL8: {
      type: String,
      default: "Grains",
    },
    NCL9: {
      type: String,
      default: "Oil seeds",
    },
    NCL10: {
      type: String,
      default: "Maple syrup",
    },
    NCL11: {
      type: String,
      default: "Sod",
    },
    NCL12: {
      type: String,
      default: "Tobacco",
    },
    NCL13: {
      type: String,
      default: "Bovine",
    },
    NCL14: {
      type: String,
      default: "Dairy",
    },
    NCL15: {
      type: String,
      default: "Duck",
    },
    NCL16: {
      type: String,
      default: "Horse",
    },
    NCL17: {
      type: String,
      default: "Mink",
    },
    NCL18: {
      type: String,
      default: "Poultry",
    },
    NCL19: {
      type: String,
      default: "Sheep",
    },
    NCL20: {
      type: String,
      default: "Swine",
    },

    NCLPara: {
      type: String,
      default:
        "Employers must provide proof that the on-farm or off-site housing has been inspected by the appropriate provincial/territorial/municipal body or by an authorized private inspector with appropriate certification. Foreign workers are not obliged to use the accommodation provided by the employer and can choose to live at the accommodation of their own choice with their family.",
    },
    //
    ImportantNoteHeading: {
      type: String,
      default: "The important thing to note",
    },
    ImportantNotePara: {
      type: String,
      default:
        "Agriculture Stream LMIA applications are approved with the employment duration of 2 years only. However, if the employer qualifies for the same position in the High-wage LMIA application, the employment duration can be 3 years instead.",
    },

    HowApplyHeading: {
      type: String,
      default: "How to Apply for Agricultural Stream LMIA ?",
    },

    ha1: {
      type: String,
      default:
        "Have an initial assessment performed by us to verify if the employer is eligible to apply for LMIA for a specific position and how many positions are allowed. We will also discuss the application that should be submitted to the High-wage LMIA program.",
    },
    ha2: {
      type: String,
      default:
        "We will provide you with a checklist of documents and information required to start the initial process.",
    },
    ha3: {
      type: String,
      default:
        "If required, perform recruitment efforts as per ESDC program requirements for each LMIA type. Job advertisement postings (All advertisements must be active for 14 days before submission).",
    },
    ha4: {
      type: String,
      default:
        "Get a housing inspection done by the appropriate provincial/territorial/municipal body or by an authorized private inspector with appropriate certification. The inspector will provide you with a filled in Schedule F – Housing inspection report seasonal agricultural worker program and agricultural stream.",
    },
    ha5: {
      type: String,
      default: "Interview local applicants.",
    },
    ha6: {
      type: String,
      default:
        "Prepare and submit an LMIA application to the Service Canada ESDS department.",
    },
    ha7: {
      type: String,
      default:
        "Wait for LMIA processing time, which can range from 15 to 60 business days. If the Service Canada officer has any questions or concerns or requires any further information, the employer might be contacted for an interview.",
    },
    ha8: {
      type: String,
      default:
        "Once LMIA is received, the employer can add or remove the name of the foreign worker.",
    },

    RefusalHeading: {
      type: String,
      default: "Common Reasons for Refusal",
    },
    RefusalSubHeading1: {
      type: String,
      default:
        "Over the years, Service Canada officers have become very strict about the employers meeting the requirements of the program.",
    },
    RefusalSubHeading2: {
      type: String,
      default: "Please see below the common reasons for refusals:",
    },
    r1: {
      type: String,
      default: "Failure to perform or document the minimum recruitment requirements.",
    },
    r2: {
      type: String,
      default:
        "Using the wrong methods of recruitment.",
    },
    r3: {
      type: String,
      default:
        "Not able to provide housing inspection report.",
    },
    r4: {
      type: String,
      default:
        "The job requirements mentioned in the job postings and LMIA application are too high compared to the Employment Requirements mentioned on the NOC website.",
    },
    r5: {
      type: String,
      default: "Provided false, misleading, or inaccurate information in the LMIA application.",
    },
    r6: {
      type: String,
      default: "Have been found non-compliant as a result of an employer compliance review.",
    },
    r7: {
      type: String,
      default: "Have been banned from the Temporary Foreign Worker Program because non-compliance was discovered during an inspection.",
    },
    r8: {
      type: String,
      default: "Are in default of payment of an administrative monetary penalty.",
    },
    StillNotSureHeading: {
      type: String,
      default: "Still Not Sure?",
    },
    StillNotSurePara1: {
      type: String,
      default:
        "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. While we don't provide jobs for LMIA, we can certainly assist you if you have a job offer. We have obtained approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
    },
    StillNotSurePara2: {
        type: String,
        default: "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Start your process now.",
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
          " What is the maximum duration of employment under this stream? ",
      },
      qa1: {
        type: String,
        default:
          "The employment duration for Agricultural Stream LMIA applications is typically two years, but it can be extended to three years if the employer qualifies under the High-wage LMIA application. ",
      },
      q2: {
        type: String,
        default:
          " How much is the LMIA application fee?  ",
      },
      qa2: {
        type: String,
        default:
          " The Labour Market Impact Assessment (LMIA) processing fee doesn’t apply to occupations related to primary agriculture and positions under the National Occupational Classification (NOC) codes 80020, 80021, 82030, 82031, 84120, 85100, 85101 and 85103. ",
      },
  
      q3: {
        type: String,
        default:
          " What type of housing an employer can provide to the foreign workers: ",
      },
      qa3: {
        type: String,
        default:
          "There are two types of housing – on-farm housing and off-site housing. The employer can be the owner or leaseholder of these housing properties. ",
      },
      q4: {
        type: String,
        default:
          "  ",
      },
      qa4: {
        type: String,
        default:
          "   ",
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
          " ",
      },
      qa6: {
        type: String,
        default:
          " ",
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

let agricultureStreamLmiaSection = mongoose.model(
  "Agriculture Stream Lmia Section",
  agricultureStreamLmiaSchema
);
module.exports = agricultureStreamLmiaSection;
