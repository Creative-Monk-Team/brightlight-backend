let mongoose = require("mongoose");
let openWorkDependentChildSchema = mongoose.Schema(
  {
    openWorkDepHeading: {
      type: String,
      default: "Open Work Permit for Dependent Child of Foreign Worker in Canadas",
    },
    openWorkDepPara: {
      type: String,
      default:
        "IRCC now allows your dependent children of Temporary Foreign Workers (TFWs) to obtain work permits without the need for an LMIA or job offer, under LMIA exemption codes C46 and C48.",
    },
   

    //
    BenifitsHeading: {
        type: String,
        default: "Benefits of Open Work Permit for Vulnerable Workers",
      },
 
      BenifitsList1: {
        type: String,
        default: "Financial Independence: Enables your dependent child to work and earn income, supporting their expenses or saving for education.",
      }, 
      BenifitsList2: {
        type: String,
        default: "Professional Development: Provides opportunities for skill enhancement and career growth.",
      }, 
      BenifitsList3: {
        type: String,
        default: "Integration: Helps your dependent child integrate into Canadian society and understand Canadian workplace dynamics.",
      }, 
      BenifitsList4: {
        type: String,
        default: "Contribution to Household Income: Additional income can reduce financial strain and improve the family's standard of living.",
      }, 
      BenifitsList5: {
        type: String,
        default: "Networking Opportunities: Allows your child to build professional networks beneficial for their future career.",
      }, 
      BenifitsList6: {
        type: String,
        default: "Pathway to Permanent Residency: Canadian work experience may make your child eligible for permanent residency in the future.",
      }, 
    //

        //
        EligibilityHeading: {
            type: String,
            default: "Eligibility criteria for Open work permit for Dependent child of foreign worker in Canada:",
          },

          EligibilitySubHead: {
            type: String,
            default: "There are 3 main groups of eligible family members as classified below:",
          },

          EligMainSubHead1: {
            type: String,
            default: "1. Foreign Nationals in High-Skilled Occupations (TEER 0, 1, 2, or 3)",
          },
          EligMain1List1: {
            type: String,
            default: "Valid Work Authorization: You must possess one of the following:",
          },
          EligMainSub1List1: {
            type: String,
            default: "A valid work permit, subject to certain exceptions*.",
          },
          EligMainSub1List2: {
            type: String,
            default: "An approved work permit that has not yet been issued (indicated by a port of entry letter of introduction).",
          },
          EligMainSub1List3: {
            type: String,
            default: "Authorization to work without a permit.",
          },
//
EligMain2List: {
    type: String,
    default: "Work Permit Validity:Your work permit or authorized work status must be valid for at least six months beyond the date you submit your family member's open work permit application.",
  },
  //
  EligMain3List: {
    type: String,
    default: "High-Skilled Occupation:You must be employed or have a confirmed offer of employment in a high-skilled occupation, as defined by the National Occupation Classification system (TEER categories 0, 1, 2, or 3).",
  },
  //
  EligMain4List: {
    type: String,
    default: "Canadian Residence: You must be living in Canada or have plans to move to Canada to work.",
  },
  //
  EligMain5List: {
    type: String,
    default: "Not Eligible",
  },
  EligMainSub5List1: {
    type: String,
    default: "You have made a refugee claim that has been referred to the Immigration and Refugee Board.",
  },
  EligMainSub5List2: {
    type: String,
    default: "You are subject to an unenforceable removal order.",
  },
  EligMainSub5List3: {
    type: String,
    default: "You are an international student working in a co-op program without a work permit.",
  },
  EligMainSub5List4: {
    type: String,
    default: "You are an international student working off-campus without a work permit.",
  },
  EligMainSub5List5: {
    type: String,
    default: "You have applied for a post-graduation work permit (PGWP) but have not yet received a positive decision.",
  },
  EligMainSub5List6: {
    type: String,
    default: "You, yourself, hold a spousal open work permit.",
  },
//

EligMainSubHead2: {
    type: String,
    default: "2. Foreign Nationals in Low-Skilled Occupations (TEER 4 or 5)",
  },

  EligMainSubHead2Para: {
    type: String,
    default: "You must meet the following four requirements to be eligible to apply for your child:",
  },
  EligMain6List: {
    type: String,
    default: "Valid Work Authorization: You must possess one of the following:",
  },
  EligMainSub6List1: {
    type: String,
    default: "A valid work permit, subject to certain exceptions*.",
  },
  EligMainSub6List2: {
    type: String,
    default: "An approved work permit that has not yet been issued (indicated by a port of entry letter of introduction).",
  },
  EligMainSub6List3: {
    type: String,
    default: "Authorization to work without a permit.",
  },
  //

  EligMain7List: {
    type: String,
    default: "Work Permit Validity:Your work permit or authorized work status must be valid for at least six months beyond the date you submit your family member's open work permit application.",
  },
  //
  EligMain8List: {
    type: String,
    default: "Low-Skilled Occupation: You must be employed or have a confirmed offer of employment in a low-skilled occupation, as defined by the National Occupation Classification system (TEER categories 4 or 5).",
  },
  //
  EligMain9List: {
    type: String,
    default: "Canadian Residence: You must be living in Canada or have plans to move to Canada to work.",
  },
  EligMain10List: {
    type: String,
    default: "If the work permit holder is under the Agri-Food Pilot:you must hold a labor market impact assessment (LMIA)-based work permit in the agriculture or low-wage stream of the Agri-Food Pilot and must have received an acknowledgment of receipt AOR letter from IRCC confirming that your application for permanent residence is complete.",
  },

  //
  EligMain11List: {
    type: String,
    default: "Not Eligible currently",
  },
  EligMainSub11List1: {
    type: String,
    default: "You hold a work permit under the low-wage stream of the Temporary Foreign Worker Program.",
  },
  EligMainSub11List2: {
    type: String,
    default: "You hold a work permit under the Seasonal Agricultural Worker Program.",
  },
  EligMainSub11List3: {
    type: String,
    default: "You hold a work permit under the agricultural stream of the Temporary Foreign Worker Program.",
  },
  EligMainSub11List4: {
    type: String,
    default: "You have made a refugee claim referred to the Immigration and Refugee Board.",
  },
  EligMainSub11List5: {
    type: String,
    default: "You are subject to an unenforceable removal order.",
  },
  EligMainSub11List6: {
    type: String,
    default: "You are an international student in a co-op program.",
  },
  EligMainSub11List7: {
    type: String,
    default: "You are an international student working off-campus without a work permit.",
  },
  EligMainSub11List8: {
    type: String,
    default: "You are applying for a Post-Graduation Work Permit (PGWP) and haven't received a positive decision on your application yet.",
  },
     
//
     //


     EligMainSubHead3: {
        type: String,
        default: "3. Foreign Nationals Applying for Permanent Residence through Economic Immigration Program",
      },
    
      EligMainSubHead3Para: {
        type: String,
        default: "You must meet the following four requirements to be eligible to apply for your child:",
      },
      EligMain12List: {
        type: String,
        default: "Valid Work Authorization: You must possess one of the following:",
      },
      EligMainSub12List1: {
        type: String,
        default: "A valid work permit, subject to certain exceptions*.",
      },
      EligMainSub12List2: {
        type: String,
        default: "An approved work permit that has not yet been issued (indicated by a port of entry letter of introduction).",
      },

      //

      EligMain13List: {
        type: String,
        default: "Work Permit Validity: Your work permit or authorized work status must be valid for at least six months beyond the date you submit your family member's open work permit application.",
      },
      //
      EligMain14List: {
        type: String,
        default: "Canadian Residence: You must be living in Canada or have plans to move to Canada to work.",
      },
      //
      EligMain15List: {
        type: String,
        default: "Permanent Residency in Process: Your work permit was issued or approved because you applied for an economic class permanent residence program.",
      },


          ReqHeading: {
            type: String,
            default: "Requirements for Your Dependent Child",
          }, 
          Reqlist1: {
            type: String,
            default: "General Eligibility: Must meet general work permit criteria, including police and medical clearances.",
          }, 
          Reqlist2: {
            type: String,
            default: "Relationship: Must be in a genuine relationship with the principal applicant.",
          }, 
          Reqlist3: {
            type: String,
            default: "Temporary Residency: Must have valid temporary resident status or be eligible for restoration of status.",
          }, 
          Reqlist4: {
            type: String,
            default: "Minimum Age to Work: Must be of legal working age as defined by the province/territory. See the chart below.",
          }, 


          LegalMinTableHeading: {
            type: String,
            default: "Legal Minimum Age to Work by Province/Territory",
          }, 

          LegalMinTableHead1: {
            type: String,
            default: "Province/Territory",
          }, 
          LegalMinTab1Head1: {
            type: String,
            default: "Alberta",
          }, 
          LegalMinTab1Head2: {
            type: String,
            default: "British Columbia",
          }, 
          LegalMinTab1Head3: {
            type: String,
            default: "Manitoba",
          }, 
          LegalMinTab1Head4: {
            type: String,
            default: "New Brunswick",
          }, 
          LegalMinTab1Head5: {
            type: String,
            default: "Newfoundland and Labrador",
          }, 
          LegalMinTab1Head6: {
            type: String,
            default: "Nova Scotia",
          }, 
          LegalMinTab1Head7: {
            type: String,
            default: "Ontario",
          }, 
          LegalMinTab1Head8: {
            type: String,
            default: "Prince Edward Island",
          }, 
          LegalMinTab1Head9: {
            type: String,
            default: "Quebec",
          }, 
          LegalMinTab1Head10: {
            type: String,
            default: "Saskatchewan",
          }, 
          LegalMinTab1Head11: {
            type: String,
            default: "Northwest Territories",
          }, 
          LegalMinTab1Head12: {
            type: String,
            default: "Nunavut",
          }, 
          LegalMinTab1Head13: {
            type: String,
            default: "Yukon",
          }, 

          //


          LegalMinTableHead2: {
            type: String,
            default: "Minimum Legal Age to Work",
          }, 
          LegalMinTab2Head1: {
            type: String,
            default: "13 years",
          }, 
          LegalMinTab2Head2: {
            type: String,
            default: "15 years",
          }, 
          LegalMinTab2Head3: {
            type: String,
            default: "13 years",
          }, 
          LegalMinTab2Head4: {
            type: String,
            default: "16 years",
          }, 
          LegalMinTab2Head5: {
            type: String,
            default: "16 years",
          }, 
          LegalMinTab2Head6: {
            type: String,
            default: "16 years",
          }, 
          LegalMinTab2Head7: {
            type: String,
            default: "14 years",
          }, 
          LegalMinTab2Head8: {
            type: String,
            default: "16 years",
          }, 
          LegalMinTab2Head9: {
            type: String,
            default: "No minimum age",
          }, 
          LegalMinTab2Head10: {
            type: String,
            default: "16 years",
          }, 
          LegalMinTab2Head11: {
            type: String,
            default: "No minimum age",
          }, 
          LegalMinTab2Head12: {
            type: String,
            default: "No minimum age",
          }, 
          LegalMinTab2Head13: {
            type: String,
            default: "No minimum age",
          }, 

          //
          ///
///

          
          LegalMinTableHead3: {
            type: String,
            default: "Exceptions",
          }, 
          LegalMinTab3Head1: {
            type: String,
            default: "Children who are 12 or younger may do artistic work.",
          }, 
          LegalMinTab3Head2: {
            type: String,
            default: "Children 12-14 may work with written consent from parents/guardians.",
          }, 
          LegalMinTab3Head3: {
            type: String,
            default: "Children 13-15 must complete a Young Worker Readiness Certificate Course.",
          }, 
          LegalMinTab3Head4: {
            type: String,
            default: "Employers may apply for Authorization to employ children under 16s",
          }, 
          LegalMinTab3Head5: {
            type: String,
            default: "Some restrictions apply to children under 16.",
          }, 
          LegalMinTab3Head6: {
            type: String,
            default: "Children 14-15 may work in restaurants with conditions",
          }, 
          LegalMinTab3Head7: {
            type: String,
            default: "Minors may not work during school hours.",
          }, 
          LegalMinTab3Head8: {
            type: String,
            default: "Many restrictions apply.",
          }, 
          LegalMinTab3Head9: {
            type: String,
            default: "Children under 14 need parents’ or guardians’ consent.",
          }, 
          LegalMinTab3Head10: {
            type: String,
            default: "14-15 year olds need consent and must complete YWRCC.",
          }, 
          LegalMinTab3Head11: {
            type: String,
            default: "Youths less than 17 need authorization for specific times and industries.",
          }, 
          LegalMinTab3Head12: {
            type: String,
            default: "Hiring under 17 has many restrictions.",
          }, 
          LegalMinTab3Head13: {
            type: String,
            default: "Many restrictions for youth workers.",
          }, 

          //
          ///

          HowApplyHeading: {
            type: String,
            default: "How to Apply",
          }, 

          HowAppList1: {
            type: String,
            default: "Identify the principal applicant’s occupation in TEER category 0, 1, 2, 3, 4, or 5.",
          },
          HowAppList2: {
            type: String,
            default: "Gather documents to prove eligibility criteria.",
          },
          HowAppList3: {
            type: String,
            default: "Gather documents to prove a genuine relationship.",
          },
          HowAppList4: {
            type: String,
            default: "If applying from outside Canada, you might need a medical exam and police clearance certificates.",
          },
          HowAppList5: {
            type: String,
            default: "Submit a complete application to IRCC.",
          },
          HowAppList6: {
            type: String,
            default: "After receiving the Biometric Collection Instruction letter, make an appointment for biometrics within 30 days.",
          },
          HowAppList7: {
            type: String,
            default: "Wait for IRCC to process your application.",
          },

          RefusalHeading: {
            type: String,
            default: "Common Reasons for Refusal",
          },
          RefusalList1: {
            type: String,
            default: "Lack of documentation verifying the NOC of the principal applicant.",
          },
          RefusalList2: {
            type: String,
            default: "Inadequate evidence of the relationship between parent and child.",
          },

          RefusalList3: {
            type: String,
            default: "Principal applicant is employed in a low-skill occupation and has not applied for PR.",
          },

          RefusalList4: {
            type: String,
            default: "Principal applicant's work permit is expiring without an extension application.",
          },

  


    StillNotSureHeading: {
      type: String,
      default: "Still Not Sure?",
    },
    StillNotSurePara: {
      type: String,
      default:
        "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. While we don't provide jobs for LMIA, we can assist if you have a job offer. We have successfully obtained approvals for clients with previous refusals through a tailored approach, addressing each concern listed in refusals, and using case law as precedents. Contact us at Brightlight Immigration for expert assistance from start to finish.",
    },

    YouMustHoldlabour: {
      type: String,
      default: " you must hold a labor market impact assessment (LMIA)-based work permit in the agriculture or low-wage stream of the Agri-Food Pilot and must have received an acknowledgment of receipt AOR letter from IRCC confirming that your application for permanent residence is complete.",
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
        "  Can my child study while on an open work permit?",
    },
    qa1: {
      type: String,
      default:
        "Unfortunately, no. They will have to apply for a study permit to be authorized to study in Canada. ",
    },
    q2: {
      type: String,
      default:
        "  Can my minor child on study permit work? ",
    },
    qa2: {
      type: String,
      default:
        " Unfortunately, no. Unlike post-secondary students, minor children are not allowed to work while on their study permit. ",
    },

    q3: {
      type: String,
      default:
        " Can my child apply for his own permanent residency after gaining experience in Canada? ",
    },
    qa3: {
      type: String,
      default:
        " Yes, they can apply for the Canadian Experience Class under Express Entry or for the provincial nominee program.",
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

let openWorkDependentChildSection = mongoose.model(
  "Open Work Permit for Dependent Child of Foreign  Section",
  openWorkDependentChildSchema
);
module.exports = openWorkDependentChildSection;
