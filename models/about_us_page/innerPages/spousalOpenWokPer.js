let mongoose = require("mongoose");
let spousalOpenWokPerSchema = mongoose.Schema(
  {
    spousalOpenWokPerHeading: {
      type: String,
      default: "Spousal Open Work Permit (SOWP) Canada",
    },
    spousalOpenWokPerPara1: {
      type: String,
      default:
        "With a Spousal Open Work Permit (SOWP), your spouse can accompany you in Canada, allowing them to flourish professionally and contribute to your family's well-being.",
    },
    spousalOpenWokPerPara2: {
        type: String,
        default:
          "A Spousal Open Work Permit (SOWP) is a type of work permit issued to the spouse or common-law partner of a temporary visa holder, permanent resident, or citizen of Canada. It allows the spouse to work freely in Canada without requiring a specific job offer. This type of permit is particularly beneficial for spouses who want to join their partners in Canada and contribute financially to their families.",
      },
  
//


BenifitHeading: {
    type: String,
    default: "Benefits of Spousal Open Work Permit (SOWP)",
  },
  
b1: {
  type: String,
  default: "It enables your spouse or common-law partner to accompany you to Canada and reside with you.",
},
b2: {
  type: String,
  default: "It permits your spouse or common-law partner to work, alleviating financial strain on you.",
},
b3: {
    type: String,
    default: "It provides your spouse or common-law partner with the opportunity to gain Canadian work experience.",
  },
  b4: {
    type: String,
    default: "Through the Canadian work experience gained, they may become eligible for permanent residency programs.",
  },
  b5: {
    type: String,
    default: "They have the flexibility to work for any employer and in any position.",
  },
  b6: {
    type: String,
    default: "They can also establish their own business if desired.",
  },
  b7: {
    type: String,
    default: "Unlike visitors, they are allowed to stay in Canada for longer than six months, with multiple entries allowed.",
  },
///



PathwaysHeading: {
    type: String,
    default: "Pathways under Spousal Open Work Permit (SOWP)",
  },
  PathwaysSubLi1: {
    type: String,
    default: "Spouse or Common-law Partner of a Temporary Foreign Worker [C41, C46, C47, C48]If you are the spouse or common-law partner of a temporary foreign worker who is authorized to work in Canada, you may be eligible for an open work permit. The duration depends on the validity of the work permit of the spouse.",
  },
  PathwaysSubLi2: {
    type: String,
    default: "Spouse or Common-law Partner of an International Student[C42] If you are the spouse or common-law partner of an international student who is attending a qualifying DLI and studying in a qualifying program in Canada, you may be eligible for an open work permit.",
  },
  PathwaysSubLi3: {
    type: String,
    default: "Open work permit for spouses of Canadian/PR, who are in Canada and have applied for PR.This type of open work permit is available if you are in Canada and have submitted a spousal sponsorship application for PR.",
  },
////

EligibilityHeading: {
    type: String,
    default: "Eligibility Criteria for Spousal Open Work Permit (SOWP)",
  },
  EligibilitySubHead: {
    type: String,
    default: "If your partner is currently working or studying in Canada, you could be eligible for an open work permit. Or, in some cases, if your partner is sponsoring you for permanent residency in Canada, you could also be eligible for a spousal open work permit. To be eligible for a SOWP, you need to meet the following criteria:",
  },
e1: {
  type: String,
  default: "Be married or in a common-law partnership with a Canadian citizen, permanent resident, or a person with a valid Canadian work permit or study permit.",
},
e2: {
  type: String,
  default: "Provide genuine evidence of your relationship with your partner.",
},
e3: {
    type: String,
    default: "Be admissible to Canada, including being free from any criminal or medical grounds of inadmissibility.",
  },
  e4: {
    type: String,
    default: "In some cases, prove that you have sufficient funds to support yourself during your stay in Canada.",
  },



  EligChart: {
    type: String,
    default: "Eligibility Chart",
  },

  EligChartHead1: {
    type: String,
    default: "Your Sponsor’s Status",
  },
  ec1P1: {
    type: String,
    default: "Canadian citizen or permanent resident",
  },
  ec1P2: {
    type: String,
    default: "Valid study permit holder",
  },
  ec1P3: {
    type: String,
    default: "Valid work permit, including PGWP",
  },
  ec1P4: {
    type: String,
    default: "Bridging Open Work Permit (BOWP)",
  },
  ec1P5: {
    type: String,
    default: "Provincial Nominee",
  },
  ec1P6: {
    type: String,
    default: "Atlantic Immigration Program (AIP) work permit holder",
  },
//
  EligChartHead2: {
    type: String,
    default: "Occupational Skill Level Required of Your Sponsor",
  },
  ec2P1: {
    type: String,
    default: "Not necessary",
  },
  ec2P2: {
    type: String,
    default: "Not necessary",
  },
  ec2P3: {
    type: String,
    default: "TEER 0, 1, 2, 3, 4, 5",
  },
  ec2P4: {
    type: String,
    default: "Varies depending on the program sponsor applies under",
  },
  ec2P5: {
    type: String,
    default: "Any occupational skill level",
  },
  ec2P6: {
    type: String,
    default: "TEER 0, 1, 2, or 3",
  },
  //
  EligChartHead3: {
    type: String,
    default: "Minimum Work Permit Validity of Your Sponsor",
  },
  ec3P1: {
    type: String,
    default: "Not necessary",
  },
  ec3P2: {
    type: String,
    default: "Not necessary",
  },
  ec3P3: {
    type: String,
    default: "Not necessary",
  },
  ec3P4: {
    type: String,
    default: "6 months",
  },
  ec3P5: {
    type: String,
    default: "6 months",
  },
  ec3P6: {
    type: String,
    default: "6 months",
  },

  //
  ///
  ////
  /////
  HowApplyHeading: {
      type: String,
      default: "How to Apply for Spousal Open Work Permit (SOWP)",
    },
    HowApplySubHead: {
        type: String,
        default: "The list of documents needed for a Canadian spousal open work permit will depend on the category you're applying under and your individual circumstances. However, here's a general list of documents you might need to provide:",
      },
      ha1:{
        type: String,
        default: "Completed application forms.",
      },
      ha2:{
        type: String,
        default: "Proof of valid status in Canada, if already in Canada.",
      },
      ha3:{
        type: String,
        default: "Proof of your spouse's status in Canada (as applicable).",
      },
      ha4:{
        type: String,
        default: "Proof of your relationship (a marriage certificate or proof of common-law relationship, etc)",
      },
      ha5:{
        type: String,
        default: "Documentation highlighting the authenticity of your relationship bond.",
      },
      ha6:{
        type: String,
        default: "A clear photocopy of your valid passport.",
      },
      ha7:{
        type: String,
        default: "Medical exam results.",
      },
      ha8:{
        type: String,
        default: "Acknowledgment of Receipt (AOR) letter, if applicable.",
      },
      ha9:{
        type: String,
        default: "Proof of payment for government fees.",
      },

      howAppNote:{
        type: String,
        default: "Please note that these are just general documents, and the specific requirements may vary depending on your circumstances. It is always advisable to consult with an immigration consultant or authorized representative for personalized guidance and a checklist. Reach out to our Regulated Canadian Immigration Consultant (RCIC) at 604-503-3734 for a more tailored checklist to increase your chances of a successful application.",
      },
//
     RefusalHeading: {
       type: String,
       default: "Common Reasons for Refusal of Spousal Open Work Permit (SOWP)",
  },

  RefusalSubHead: {
    type: String,
    default: "To increase your chances of successfully obtaining a spousal open work permit (SOWP), it's crucial to avoid certain common reasons for refusal, receiving Procedural Fairness Letter (PFL), or a request for additional documents. Let's explore the most frequently cited reasons why an immigration officer might deny your application:",
},
r1: {
    type: String,
    default: "Genuineness of Relationship: The strength of your relationship with your spouse or common-law partner is a cornerstone of the SOWP application. To convince the officer of the authenticity of your bond, provide ample evidence of your shared history, such as joint bank statements, shared property ownership, joint travel documents, etc.",
},

r2: {
    type: String,
    default: "Insufficient Proof of Funds: Showing financial stability is essential for securing a SOWP. Gather all supporting documents that showcase your and your spouse's ability to support yourselves in Canada, such as bank statements, employment letters, tax returns, etc.",
},
r3: {
    type: String,
    default: "Lack of Ties to Home Country: The officer needs assurance that you intend to return to your home country once your stay in Canada concludes. Provide evidence of your strong ties to your native land, including property ownership, employment opportunities, etc.",
},
r4: {
    type: String,
    default: "School Enrollment Proof (if applicable): To make your application stronger, provide solid evidence that your sponsor is currently enrolled in and actively attending classes at a designated learning institution (DLI) in Canada. Failure to do so could significantly hinder your application's chances of approval.",
},
//
      StillNotHeading: {
        type: String,
        default: "Still not sure?",
      },
      s1: {
        type: String,
        default:
          "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have obtained approvals for clients who had multiple previous refusals.",
      },
      s2: {
        type: String,
        default:
          "We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in the cases we work on. This is why we have a high success rate.At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
      },
      //
      WhyChooseUsHeading: {
        type: String,
        default: "Why Choose Us?",
      },
      WhyChooseUsPara: {
        type: String,
        default:
          "At Brightlight Immigration, we are committed to providing you with expert assistance throughout your immigration journey. Our experienced team is dedicated to achieving the best possible outcomes for our clients.",
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
          "  How long does it take to get a spousal open work permit?",
      },
      qa1: {
        type: String,
        default:
          " Processing times for spousal open work permit can vary depending on the applicant’s residence country, but it typically takes between 3 and 5 months to receive a decision.   ",
      },
      q2: {
        type: String,
        default:
          " How much is the open work permit fee? ",
      },
      qa2: {
        type: String,
        default:
          " The total cost of applying for a spousal open work permit is CAD$255, which includes a processing fee of CAD$155 and a work permit holder fee of CAD$100. ",
      },
  
      q3: {
        type: String,
        default:
          "Can a spouse's open work permit be extended? ",
      },
      qa3: {
        type: String,
        default:
          "No, a spousal open work permit (SOWP) is linked to the validity of your spouse's primary applicant's permit. If your SOWP expires, you will need to reapply based on your spouse's current status in Canada.",
      },
      q4: {
        type: String,
        default:
          " Can I work anywhere in Canada on a spousal open work permit?  ",
      },
      qa4: {
        type: String,
        default:
          "   Yes, spousal open work permit holders have the flexibility to work for any employer anywhere in Canada, with minimal limitations. ",
      },
  
      q5: {
        type: String,
        default:
          "How to apply for a spousal open work permit? ",
      },
      qa5: {
        type: String,
        default:
          " The application process for a spousal open work permit (SOWP) can differ depending on the specific type of SOWP you qualify for. Therefore, the first step is to identify the most appropriate SOWP for your situation. Once you have done so, the required documentation list will be generated accordingly. If you need assistance with the application process, reach out to our RCIC for a more tailored checklist at 604-503-3734  ",
       },
      q6: {
        type: String,
        default:
          " How much funds are required to show for a spousal open work permit SOWP? ",
      },
      qa6: {
        type: String,
        default:
          "Your supporting documentation must demonstrate that you have sufficient financial resources to support yourself during your stay in Canada. If the immigration officer is not convinced that you can financially support yourself, it could lead to a rejection of your application.",
      },
  
      q7: {
        type: String,
        default:
          "Why was my SOWP spousal open work permit refused?  ",
      },
      qa7: {
        type: String,
        default:
          "  While there are many reasons why an immigration officer may refuse a SOWP application, one of the most common reasons is insufficient proof of funds. If your application has been denied, do not hesitate to contact us at 604-503-3734 as we specialize in handling refusal cases.  ",
      },
  
      q8: {
        type: String,
        default:
          " Can Divorce or separation affect my SOWP; spousal open work permit application? ",
      },
      qa8: {
        type: String,
        default:
          " If you divorce or separate after receiving your spousal open work permit, your status will not be affected. Your work permit will remain valid until it expires. However, if your relationship ends while your application is still in process, you must update IRCC on your relationship status. This means you will no longer be eligible for a spousal open work permit. ",
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

let spousalOpenWokPerSection = mongoose.model(
  "Spousal Open Work Permit (SOWP) Canada program",
  spousalOpenWokPerSchema
);
module.exports = spousalOpenWokPerSection;
