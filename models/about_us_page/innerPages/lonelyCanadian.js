let mongoose = require("mongoose");
let lonelyCanadianSchema = mongoose.Schema(
  {
    LonCanHeading: {
      type: String,
      default: "Lonely Canadian Sponsoring Other Relatives: A Path to Family Reunification",
    },
    LonCanPara: {
      type: String,
      default:
        "Canada’s family sponsorship program prioritizes family reunification. If you wish to sponsor other family members who may be lonely or orphaned, certain conditions apply. Here’s what you need to know:",
    },
   
//

      EligibilityHeading: {
      type: String,
      default: "Eligibility Criteria to Sponsor Other Relatives as a Lonely Canadian",
    },
      EligibilitySubHeading: {
        type: String,
        default: "To sponsor relatives such as nephews, nieces, uncles, and aunts, the sponsor must meet the following criteria:",
      },
    e1: {
      type: String,
      default: "Minimum Necessary Income: The sponsor should have sufficient income.",
    },
    e2: {
      type: String,
      default:
        "Age Requirement: Be at least 18 years old.",
    },
    e3: {
        type: String,
        default:
          "Canadian Citizenship or Permanent Residency: The sponsor must be a Canadian citizen or permanent resident residing in Canada.",
      },
      e4: {
        type: String,
        default:
          "Debt and Bankruptcy: Be free from debt or bankruptcy proceedings.",
      },
      e5: {
        type: String,
        default:
          "Application Readiness: Prepared to submit the sponsorship application with all required forms and documents.",
      },
      e6: {
        type: String,
        default:
          "Undertaking Obligations: Willing to accept the responsibilities of undertaking.",
      },
      e7: {
        type: String,
        default:
          "No Removal Orders or Criminal Convictions: Free from any restrictions of removal orders and criminal convictions.",
      },

  //
    //

    DurationHeading: {
        type: String,
        default: "Duration of Undertaking",
      },

      DLi1: {
        type: String,
        default: "The undertaking to sponsor other relatives to Canada lasts for ten years.",
      },
      DLi2: {
        type: String,
        default:
          "This period begins when your relative becomes a permanent resident of Canada.",
      },
      DLi3: {
          type: String,
          default:
            "During this time, the relative will not have access to social assistance.",
        },
        DLi4: {
            type: String,
            default:
              "If the sponsor receives any social assistance, they must repay the amount to the government.",
          },
          DLi5: {
            type: String,
            default:
              "The undertaking also extends to the spouse or child of the sponsored relative.",
          },
          DLi6: {
            type: String,
            default:
              "Social assistance for disabled individuals does not impact the sponsorship application.",
          },


    //

    //
    BankruptcyHeading: {
        type: String,
        default: "Bankruptcy and Criminal Sentences",
      },
     
      bankL1: {
        type: String,
        default: "Sponsoring other relatives is not allowed if the sponsor is filing for bankruptcy.",
      },
      bankL2: {
        type: String,
        default:
          "Eligibility to sponsor is possible only after the discharge of bankruptcy.",
      },
      bankL3: {
          type: String,
          default:
            "Similarly, a criminal conviction can disqualify the sponsor from sponsoring another relative.",
        },

        bankL4: {
            type: String,
            default:
              "The severity of the crime determines most restrictions.",
          },

          
        bankL5: {
            type: String,
            default:
              "However, eligibility may be regained if the sentence is over five years old and there is no past criminal record outside Canada during the same period.",
          },

    //
    SponsoringHeading: {
        type: String,
        default:
          "Sponsoring Siblings",
      },
      SponsoringSubHead1: {
        type: String,
        default:
          "Alternative options exist for sponsoring siblings:",
      },
      SponLi1: {
        type: String,
        default:
          "Siblings Below 18: You can sponsor a brother or sister below 18 years of age who has lost both parents.",
      },
      SponLi2: {
        type: String,
        default:
          "Lone Sponsor: Even if you are a lonely sponsor, you can sponsor a brother or sister who is over 18 years of age.",
      },
      SponsoringSubHead2: {
        type: String,
        default:
          "A lonely sponsor does not have:",
      },
      SponLi3: {
        type: String,
        default:
          "Mother",
      },
      SponLi4: {
        type: String,
        default:
          "Father",
      },
      SponLi5: {
        type: String,
        default:
          "Child",
      },
      SponLi6: {
        type: String,
        default:
          "Spouse",
      },
      SponLi7: {
        type: String,
        default:
          "Common-law partner",
      },
      SponLi8: {
        type: String,
        default:
          "Conjugal partner",
      },
      SponLi9: {
        type: String,
        default:
          "Grandparents",
      },
  //
  ExplHeading: {
    type: String,
    default: "Exploring Other Possibilities",
  },
  ExplSubHead: {
    type: String,
    default: "Consider the following alternatives if you cannot sponsor a sibling over 18 years of age:",
  },
  ExpLi1: {
    type: String,
    default: "Study in Canada: Apply for immigration through a study permit",
  },
  ExpLi2: {
    type: String,
    default: "Business Partnership: Successful business owners can secure a work permit if eligible.",
  },
  ExpLi3: {
    type: String,
    default: "Express Entry: Permanent residents can leverage the Comprehensive Ranking System to receive an Invitation to Apply.",
  },


  //
    HowApplyHeading: {
      type: String,
      default: "How to Apply for Sponsoring a Relative as a Lonely Canadian",
    },
    HowApplyStepHead1: {
        type: String,
        default: "Step 1: Obtain the Application Package",
      },
      HowApplySubHead1: {
        type: String,
        default: "Application Package Contents:",
      },
    ha1: {
      type: String,
      default:
        "Instruction Guide: Read this guide before filling out the forms.",
    },
    ha2: {
      type: String,
      default:
        "Forms: Complete the necessary forms.",
    },
    ha3: {
      type: String,
      default:
        "Document Checklist: Ensure you include all required documents.",
    },
    ha4: {
        type: String,
        default:
          "Eligibility Check: Confirm your eligibility to sponsor a relative.",
      },
    HowApplySubHead2: {
        type: String,
        default: "Application Submission:",
      },
      ha5: {
        type: String,
        default:
          "Provide proof of income.",
      },
      ha6: {
        type: String,
        default:
          "Relatives must express their intent to support themselves.",
      },
      ha7: {
        type: String,
        default:
          "Agree in writing to support your relatives for a specified period (3 to 20 years).",
      },
      ha8: {
        type: String,
        default:
          "Include all dependent children of your relative (if any).",
      },
      ha9: {
        type: String,
        default:
          "Submit all documents listed in the document checklist.",
      },
      ha10: {
        type: String,
        default:
          "Missing information or documents can cause delays.",
      },
      HowApplySubHead3: {
        type: String,
        default: "Truthfulness: All information in your application must be accurate. Be truthful about:",
      },
      ha11: {
        type: String,
        default:
          "Your family members (include all in your application).",
      },
      ha12: {
        type: String,
        default:
          "Your marital status.",
      },
      ha13: {
        type: String,
        default:
          "Any changes in your circumstances.",
      },
      ha14: {
        type: String,
        default:
          "Sponsored individuals must also declare their close family members, who will undergo security, criminality, and medical checks. Failure to do so may affect future sponsorship.",
      },
      HowApplyStepHead2: {
        type: String,
        default: "Step 2: Pay Application Fees",
      },
      HowApplySubHead4: {
        type: String,
        default: "Biometrics Fee:",
      },
      ha15: {
        type: String,
        default:
          "In most cases, pay the biometrics fee when submitting your application.",
      },
      ha16: {
        type: String,
        default:
          "This fee covers fingerprint collection and a digital photo.",
      },

      HowApplySubHead5: {
        type: String,
        default: "Third-Party Fees:",
      },
      haPara1: {
        type: String,
        default:
          "Depending on your situation, you may need to pay third parties for:",
      },
      ha17: {
        type: String,
        default:
          "Medical exams.",
      },
      ha18: {
        type: String,
        default:
          "Police certificates.",
      },
      HowApplyStepHead3: {
        type: String,
        default: "Step 3: Submit Your Application",
      },
      haPara2: {
        type: String,
        default:
          "Mail all application documents to the address provided in the instruction guide of your package.",
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
          "What is the lonely Canada pathway?  ",
      },
      qa1: {
        type: String,
        default:
          " Lonely Canadian allows citizens or permanent residents to sponsor extended family members for immigration. If the sponsored individual is married or has children, they can bring their immediate family along to Canada.",
      },
      q2: {
        type: String,
        default:
          "  Who is considered a Lonely Canadian Sponsor? ",
      },
      qa2: {
        type: String,
        default:
          " A lonely sponsor does not have: <ul>   <li>Mother</li>  <li>Father</li>  <li>Child</li>  <li>Spouse</li>  <li>Common-law partner</li> <li>Conjugal partner</li>  <li>Grandparents</li>  </ul> ",
      },
  
      q3: {
        type: String,
        default:
          "  I filed for Bankruptcy can I still sponsor as a Lonely Canadian?",
      },
      qa3: {
        type: String,
        default:
          "If the sponsor is in the process of filing for bankruptcy or has already filed for bankruptcy, they are not permitted to sponsor other relatives. However, eligibility to sponsor becomes possible only after the discharge of bankruptcy. ",
      },
      q4: {
        type: String,
        default:
          " How long am I responsible for the person I sponsor as a Lonely Canadian? ",
      },
      qa4: {
        type: String,
        default:
          "  The commitment to sponsor other relatives to Canada extends over a period of ten years. This duration commences when your relative attains permanent residency in Canada. Throughout this time, the sponsored relative will not have access to social assistance. If the sponsor receives any social assistance during this period, they are obligated to repay the amount to the government. Additionally, the undertaking also encompasses the spouse or child of the sponsored relative. Importantly, social assistance for disabled individuals does not affect the sponsorship application. ",
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

let lonelyCanadianSection = mongoose.model(
  "Lonely Canadian Sponsoring Program",
  lonelyCanadianSchema
);
module.exports = lonelyCanadianSection;
