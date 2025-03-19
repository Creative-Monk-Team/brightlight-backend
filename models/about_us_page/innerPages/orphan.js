let mongoose = require("mongoose");
let orphanSchema = mongoose.Schema(
  {
    orphanHeading: {
      type: String,
      default: "Canada's Orphan Sponsorship Program",
    },
    orphanPara1: {
      type: String,
      default:
        "The Canada Orphan Sponsorship Program gives orphaned kids a chance to be with their Canadian relatives or start a new life in Canada. This special program is all about care and kindness, helping these children overcome challenges and have a life full of possibilities.",
    },
    orphanPara2: {
        type: String,
        default:
          "This program allows Canadian citizens or permanent residents to sponsor orphans under the age of 18 who have lost both parents or who were never legally adopted by either parent, to immigrate to Canada as permanent residents. Through this program, Canadian citizens and permanent residents can extend their generosity and open their hearts to bring orphaned children into their families by becoming their sponsors and providing the support these children desperately need.",
      },
   
//

      EligibilityHeading: {
      type: String,
      default: "Eligibility criteria for a Sponsor:",
    },

    e1: {
      type: String,
      default: "You must be a Canadian citizen or permanent resident who has lived in Canada for at least one year.",
    },
    e2: {
      type: String,
      default:
        "You must be at least 18 years old.",
    },
    e3: {
        type: String,
        default:
          "Show you can financially support the orphan, covering basics like housing, food, clothes, and education.",
      },
      e4: {
        type: String,
        default:
          "If you, as a sponsor, are not presently living in Canada, then you must relocate back into Canada by the time the adopted child attains permanent residency.",
      },
      e5: {
        type: String,
        default:
          "Have a safe place for the orphan, with a separate bedroom.",
      },
      e6: {
        type: String,
        default:
          "You should have a good character and a clean criminal record. You must not have been convicted of any serious crimes or have a record of child abuse or neglect.",
      },
      e7: {
        type: String,
        default:
          "Have a close relationship like being a grandparent, aunt, uncle, sibling, or other relative to the orphan.",
      },

  //
//

  WhoEligHeading: {
    type: String,
    default: "Who is eligible as an Orphan under Canada Orphan Sponsorship Program?",
  },

  we1: {
    type: String,
    default: "You are under 18 years of age.",
  },
  we2: {
    type: String,
    default:
      "You do not possess Canadian citizenship presently.",
  },
 we3: {
      type: String,
      default:
        "You are unmarried and not in a common-law partnership.",
    },
    we4: {
      type: String,
      default:
        "At the time of applying, 1 or more of your parents must be a Canadian citizen.",
    },
    we5: {
      type: String,
      default:
        "You are ineligible if the sponsoring parent was born outside Canada to a Canadian citizen or if the sponsoring parent acquired Canadian citizenship through adoption-related provisions.",
    },

    WhoEligSubHead: {
      type: String,
      default:
        "In addition, the adoption must:",
    },
    we6: {
        type: String,
        default:
          "Have been in the best interests of the child;",
      },
    we7: {
      type: String,
      default:
        "Have created a genuine relationship between parent and child;",
    },
    we8: {
        type: String,
        default:
          "Have been in accordance with the laws of the place where the adoption took place and the laws of the country of residence of the adopting citizen;",
      },
      we9: {
        type: String,
        default:
          "Not have occurred in a manner that circumvented the legal requirements for international adoptions;",
      },
      we10: {
        type: String,
        default:
          "Not have been entered into primarily for the purpose of acquiring a status or privilege in relation to immigration or citizenship.",
      },

  //
//
    HowApplyHeading: {
      type: String,
      default: "How to apply for sponsoring an Orphan?",
    },

    ha1: {
      type: String,
      default:
        "Complete a series of forms, including the sponsorship application form, financial assessment form, and medical forms for the orphan.",
    },
    ha2: {
      type: String,
      default:
        "Gather all the required supporting documents, such as birth certificates, passports, financial statements, criminal records checks, and letters of reference.",
    },
    ha3: {
      type: String,
      default:
        "Submit the completed application forms and supporting documents to IRCC.",
    },
    ha4: {
        type: String,
        default:
          "You may be required to attend an interview with IRCC officials to discuss your application and provide further information.",
      },

      ha5: {
        type: String,
        default:
          "IRCC will review your application and make a decision. This process can take several months or even longer.",
      },



      //

      RefusalHeading: {
        type: String,
        default: "Common reasons for refusals of Orphan Sponsorship Program:",
      },
      RefusalSubHead: {
        type: String,
        default: "You may not qualify due to several reasons such as not being a Canadian citizen or permanent resident, not having lived in Canada for at least one year, lacking the financial ability to support the orphan, not having suitable housing for the orphan, or having a questionable character.",
      },

      r1: {
        type: String,
        default: "The relationship between you and the orphan might not be close enough. This could be because you are a distant relative or haven't had regular contact with the orphan.",
      },
      r2: {
        type: String,
        default: "You could also be disqualified if you’ve provided false or misleading information on the application. This includes giving incorrect details about income, assets, or criminal record.",
      },
     
    
      StillNotHeading: {
        type: String,
        default: "Still not sure?",
      },
      s1: {
        type: String,
        default:
          "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have got approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
      },
      s2: {
        type: String,
        default:
          "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
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
          " Who is eligible to sponsor an orphan under the Canada Orphan Program? ",
      },
      qa1: {
        type: String,
        default:
          "To qualify for the Canada Orphan Program, the sponsor must be a Canadian citizen or permanent resident who has lived in Canada for at least one year. The sponsor must also have a good character and financial ability to support the orphan. ",
      },
      q2: {
        type: String,
        default:
          " What is the average processing time for a sponsorship application under the Canada Orphan Program?  ",
      },
      qa2: {
        type: String,
        default:
          " The processing time for a sponsorship application under the Canada Orphan Program can vary depending on the specific circumstances of the case. However, the average processing time is typically between 12 and 24 months. ",
      },
  
      q3: {
        type: String,
        default:
          "   What are the financial requirements for sponsoring an orphan under the Canada Orphan Program?",
      },
      qa3: {
        type: String,
        default:
          "To sponsor an orphan under the Canada Orphan Program, the sponsor must show that they have the financial means to support the child for at least 10 years. The sponsor must provide proof of income, assets, and savings. ",
      },
      q4: {
        type: String,
        default:
          "  What is the medical assessment process for orphans under the Canada Orphan Program?",
      },
      qa4: {
        type: String,
        default:
          "  All orphans who are sponsored under the Canada Orphan Program must undergo a medical assessment to ensure that they are healthy enough to travel to Canada and live in the country. The medical assessment is typically conducted by a doctor who is authorized by the Canadian government.  ",
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

let orphanSection = mongoose.model(
  "Orphan Program",
  orphanSchema
);
module.exports = orphanSection;
