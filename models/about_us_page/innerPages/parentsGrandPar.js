let mongoose = require("mongoose");
let parentsGrandParSchema = mongoose.Schema(
  {
    ParGrHeading: {
      type: String,
      default: "Parents and Grandparents Program (PGP)",
    },
    ParGrPara1: {
      type: String,
      default:
        "Parents and grandparents are incredibly important in one’s life. They're like the foundation of our lives, helping us become who we are today. Many dream of bringing their parents and grandparents from their native countries to be together in Canada. The Family Reunification and Sponsorship program makes this possible.",
    },
    ParGrPara2: {
        type: String,
        default:
          "The Parents and Grandparents Program (PGP) allows Canadian citizens and permanent residents to sponsor their parents and grandparents to immigrate to Canada.",
      },
   
//

      EligibilityHeading1: {
      type: String,
      default: "Eligibility criteria for Sponsor of Parents and Grandparents Program (PGP):",
    },
      EligibilityPara: {
        type: String,
        default: "You can sponsor your parents and grandparents, related by blood or adoption. This includes your mother, father, step-parents, and grandparents. However, you cannot sponsor your parents' or grandparents' siblings, unless they are dependent children.",
      },
  
  //
  EligibilityHeading2: {
    type: String,
    default: "Eligibility criteria for Parents and Grandparents Program (PGP) PR Sponsorship:",
  },
    EligibilitySubHead: {
      type: String,
      default: "Are you eligible to sponsor your parents or grandparents? Let's find out.",
    },
  e1: {
    type: String,
    default: "You should be a Canadian citizen or permanent resident.",
  },
  e2: {
    type: String,
    default: "You must be at least 18 years old.",
  },
  e3: {
      type: String,
      default: "You should be living in Canada.",
    },
    e4: {
      type: String,
      default: "You are able to financially support your parents or grandparents.",
    },
    e5: {
      type: String,
      default: "You do not have any criminal record.",
    },
    e6: {
      type: String,
      default: "Meet income requirement for the past 3 years.",
    },
    EligFormatHead: {
      type: String,
      default: "Make following table in format approved:",
    },

  //
    HowApplyHeading: {
      type: String,
      default: "How to apply for the Parents and Grandparents Program (PGP)?",
    },
    HowApplySubHead: {
        type: String,
        default: "Meet the eligibility criteria? Let's see how you can sponsor your parents or grandparents",
      },

    ha1: {
      type: String,
      default:
        "The first step is to submit an Interest to Sponsor form on the IRCC website. This form allows you to express your interest in sponsoring your parents or grandparents and will help IRCC determine if you are eligible for the program.",
    },
    ha2: {
      type: String,
      default:
        "If your Interest to Sponsor form is approved, you will be invited to apply for the program.",
    },
    ha3: {
      type: String,
      default:
        "Once you get the ITA, complete the pending form that asks about you, your parents or grandparents, and your financial situation. Show proof of your income, like tax papers, etc.",
    },
    ha4: {
        type: String,
        default:
          "If your application is approved, your parents or grandparents need to apply for permanent residence.",
      },

      ha5: {
        type: String,
        default:
          "Wait for the revert. It takes 12 to 24 months, depending on how many applications they receive, for your application to process.",
      },


      RefusalHeading: {
        type: String,
        default: "Common reasons for refusal of Parents and Grandparents Program (PGP)",
      },
      RefusalSubHead: {
        type: String,
        default: "Don’t forget to avoid these common PGP refusal reasons and increase your chances of approval.",
      },

      r1: {
        type: String,
        default: "If you can't show you have enough money to support your parents or grandparents without help, your application will be refused. The minimum income needed is CAD 43,082 for a single sponsor and CAD 52,965 for a married or common-law couple. This income is for the year 2022 if you are applying for 2023/2024.",
      },
      r2: {
        type: String,
        default: "Not meeting the income requirement for the previous 3 years.",
      },
      r3: {
        type: String,
        default: "The parent or grandparent you're sponsoring failed to pass a medical check. They need to be healthy without serious conditions that could cost a lot for Canadian health care",
      },
      r4: {
        type: String,
        default: "The sponsored person couldn’t show they can fit into Canadian life. This means being willing to learn English or French and respecting Canadian rules.",
      },
      r5: {
        type: String,
        default: "Giving incorrect information in your application could also lead to rejection.",
      },
    
      StillNotHeading: {
        type: String,
        default: "Still not sure?",
      },
      s1: {
        type: String,
        default:
          "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have achieved approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate..",
      },
      s2: {
        type: String,
        default:
          "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
      },

      IncReqTabHeading: {
        type: String,
        default: "Income required for the 3 tax years before the date you apply (if you’re applying for the 2024 intake)",
      },

      IncReqTabHead1: {
        type: String,
        default: " Family size",
      },
      IncReqTabHead2: {
        type: String,
        default: " 2023",
      },
      IncReqTabHead3: {
        type: String,
        default: "2022 ",
      },
      IncReqTabHead4: {
        type: String,
        default: " 2021",
      },

      IncReqTab1Li1: {
        type: String,
        default: "2 People",
      },

      IncReqTab2Li1: {
        type: String,
        default: "$44,530",
      },
      IncReqTab3Li1: {
        type: String,
        default: "$43,082",
      },
      IncReqTab4Li1: {
        type: String,
        default: "$32,898",
      },

      IncReqTab1Li2: {
        type: String,
        default: "3 People",
      },
      IncReqTab2Li2: {
        type: String,
        default: "$54,743",
      },
      IncReqTab3Li2: {
        type: String,
        default: "$52,965",
      },
      IncReqTab4Li2: {
        type: String,
        default: "$40,444",
      },
      
      IncReqTab1Li3: {
        type: String,
        default: "4 People",
      },
      IncReqTab2Li3: {
        type: String,
        default: "$66,466",
      },
      IncReqTab3Li3: {
        type: String,
        default: "$64,306",
      },
      IncReqTab4Li3: {
        type: String,
        default: "$49,106",
      },
      IncReqTab1Li4: {
        type: String,
        default: "5 People",
      },
      IncReqTab2Li4: {
        type: String,
        default: "$75,384 ",
      },
      IncReqTab3Li4: {
        type: String,
        default: "$72,935 ",
      },
      IncReqTab4Li4: {
        type: String,
        default: "$55,694 ",
      },
      
      IncReqTab1Li5: {
        type: String,
        default: "6 People",
      },
      IncReqTab2Li5: {
        type: String,
        default: "$85,020",
      },
      IncReqTab3Li5: {
        type: String,
        default: "$82,259",
      },
      IncReqTab4Li5: {
        type: String,
        default: "$62,814",
      },
      
      IncReqTab1Li6: {
        type: String,
        default: "7 People",
      },
      IncReqTab2Li6: {
        type: String,
        default: "$94,658",
      },
      IncReqTab3Li6: {
        type: String,
        default: "$91,582",
      },
      IncReqTab4Li6: {
        type: String,
        default: "$69,934",
      },

      IncReqTab1Li7: {
        type: String,
        default: "If more than 7 people, for each additional person, add:",
      },
      IncReqTab2Li7: {
        type: String,
        default: "$9,636",
      },
      IncReqTab3Li7: {
        type: String,
        default: "$9,324",
      },
      IncReqTab4Li7: {
        type: String,
        default: "$7,120",
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
          " Can my spouse or common-law partner financially support me in the PGP (Parents/GrandParents) sponsorship application? ",
      },
      qa1: {
        type: String,
        default:
          " Yes, your spouse or common-law partner is eligible to serve as a co-signer for your PGP application. When they act as co-signers, their income can be considered alongside yours to meet the minimum income requirement. Additionally, your spouse or common-law partner will need to sign an undertaking, committing to providing financial support for your parents or grandparents.",
      },
      q2: {
        type: String,
        default:
          " What are the medical requirements for the PGP(Parents/GrandParents) Sponsorship application?  ",
      },
      qa2: {
        type: String,
        default:
          "   Sponsored parents and grandparents must undergo a medical examination to assess their health and ensure that they are not inadmissible to Canada due to medical reasons. The medical examination will check for any serious health conditions that could pose a burden on the Canadian healthcare system.",
      },
  
      q3: {
        type: String,
        default:
          " How long does it take to process a PGP (Parents/GrandParents)Sponsorship application? ",
      },
      qa3: {
        type: String,
        default:
          "The processing time for a PGP application can vary depending on the volume of applications received. However, it typically takes between 12 and 24 months to process an application. ",
      },
      q4: {
        type: String,
        default:
          "Can I apply for the PGP (Parents/GrandParents) Sponsorship application if I am currently sponsoring another family member?  ",
      },
      qa4: {
        type: String,
        default:
          "   Yes, you can apply for the PGP (Parents/GrandParents) Sponsorship application even if you are currently sponsoring another family member. However, you must make sure that you meet the financial requirements for both sponsorships.",
      },
  
      q5: {
        type: String,
        default:
          " Can I sponsor my parents or grandparents if they are already living in Canada? ",
      },
      qa5: {
        type: String,
        default:
          " Yes, you can sponsor your parents or grandparents if they are already living in Canada as temporary residents. However, they will need to apply for permanent residence under the PGP just like any other sponsored parent or grandparent.",
       },
      q6: {
        type: String,
        default:
          "How long is the undertaking for a sponsorship of parents and grandparents? ",
      },
      qa6: {
        type: String,
        default:
          "The length of undertaking for sponsorship of parents, grandparents, and their accompanying dependents is 20 years. This period begins on the date they become a permanent resident. If the sponsored people receive social assistance within that period, then you will be required to repay the government. ",
      },
  
      q7: {
        type: String,
        default:
          " How much are the processing fees for Parents' and Grandparents Sponsorship?  ",
      },
      qa7: {
        type: String,
        default:
          " To start the process by submitting an interest to sponsor form through the PGP portal does not incur any processing fees. However, upon receiving an invitation to apply, you are required to pay application processing fees. <ul> <li>In 2024, these fees amount to $1080 per adult being sponsored and $155 for each dependent child included in the application. Additionally, there is a biometrics fee of $85 for one person or $170 for two or more individuals.</li> </ul>  ",
      },
  
      q8: {
        type: String,
        default:
          "Can my parents or grandparents travel to Canada while they are waiting for their PGP (Parents/GrandParents) Sponsorship application to be processed? ",
      },
      qa8: {
        type: String,
        default:
          "  Certainly, while awaiting the processing of their PGP (Parents/GrandParents) Sponsorship application, your parents and grandparents have the option to travel to Canada. The IRCC's super visa program (link) is specifically tailored to enable eligible parents and grandparents to visit Canada for periods of up to 5 years at a time. Alternatively, you can also apply for a Visitor Visa application. ",
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

let parentsGrandParSection = mongoose.model(
  "Parents and Grandparents Program (PGP)",
  parentsGrandParSchema
);
module.exports = parentsGrandParSection;
