let mongoose = require("mongoose");
let familyReunificationSchema = mongoose.Schema(
  {
    FamilyHeading: {
      type: String,
      default: "Family Reunification and Sponsorship",
    },
    FamilyPara1: {
      type: String,
      default:
        "Canada is renowned for its welcoming spirit and commitment to diversity, making it a haven for immigrants looking for a better life. When it comes to family reunification, Canada has established a comprehensive program that allows Canadian citizens and permanent residents to bring their loved ones to the country.",
    },
    FamilyPara2: {
      type: String,
      default:"Canada's Family Reunification Program is one of the three main pathways to permanent residency in Canada, alongside economic immigration and refugee protection. It allows Canadian citizens and permanent residents to sponsor certain relatives to immigrate to Canada as permanent residents."
    },

    CategoriesHeading: {
        type: String,
        default: "Categories Who Can Be Sponsored",
      },


      EligibilityHeading: {
      type: String,
      default: "Eligibility Criteria for Family Reunification and Sponsorship Program",
    },
    EligibilitySubHeading: {
        type: String,
        default: "The requirements for this program can vary depending on the relationship between the sponsor and the person being sponsored. However, if you’re the sponsor, you must meet the following general requirements:",
      },
    e1: {
      type: String,
      default: "Age: Should be at least 18 years old.",
    },
    e2: {
      type: String,
      default:
        "Residency: Should be a Canadian citizen or permanent resident.",
    },
    e3: {
      type: String,
      default: "Support: Should be physically and financially able to support the person being sponsored.",
    },
    e4: {
      type: String,
      default: "Criminal Record: Have a clean criminal record.",
    },
    e5: {
      type: String,
      default:
        "Housing: Should be able to provide adequate housing for the person being sponsored.",
    },
  
    HowApplyHeading: {
      type: String,
      default: "How to Apply for the Family Reunification and Sponsorship Program",
    },
    ha1: {
      type: String,
      default:
        "Complete a comprehensive application form, providing detailed information about yourself, your relationship to the person being sponsored, and your financial and housing arrangements.",
    },
    ha2: {
      type: String,
      default:
        "Pay the application fee for sponsorship, which is currently CAD$1,080 for spousal sponsorship and CAD$1,080 for parent and grandparent sponsorship.",
    },
    ha3: {
      type: String,
      default:
        "If the sponsorship application is approved, the person you are sponsoring will receive an invitation to apply for permanent residence.",
    },
    ha4: {
      type: String,
      default:
        "Ensure the person you are sponsoring completes a separate permanent residence application, providing details about their education, work experience, and language skills.",
    },
    RefusalHeading: {
      type: String,
      default: "Reasons for Refusals of Family Reunification and Sponsorship",
    },
    r1: {
      type: String,
      default:
        "It is crucial to provide complete and accurate information in your application. Missing or incorrect details can raise red flags and lead to a refusal.",
    },
    r2: {
      type: String,
      default:
        "Sponsors must demonstrate their ability to financially support the family members they are sponsoring. This means having sufficient income and assets to meet their basic needs",
    },
    r3: {
      type: String,
      default:
        "The immigration authorities may need to verify the genuineness of the relationship between the sponsor and the person being sponsored. This may involve providing documentation such as marriage certificates, birth certificates, or joint financial records. Failure to do so will lead to refusal.",
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
        "Who is eligible for the Family Reunification Program in Canada?  ",
    },
    qa1: {
      type: String,
      default:
        "The family sponsorship program allows for the sponsorship of spouses, common-law partners, conjugal partners, dependent children, children to be adopted, parents, grandparents, and other eligible relatives. ",
    },
    q2: {
      type: String,
      default:
        " Which relatives can be sponsored in Canada through the Family Reunification Program?",
    },
    qa2: {
      type: String,
      default:
        " The family sponsorship program allows for the sponsorship of close relatives such as spouses, common-law partners, conjugal partners, dependent children, children to be adopted, parents, grandparents, and other eligible relatives. ",
    },

    q3: {
      type: String,
      default:
        " What is the processing time for family reunification in Canada? ",
    },
    qa3: {
      type: String,
      default:
        "Under the new update, TRV applications will now have a processing time of 30 days moving forward. In addition, these modernization efforts have allowed the processing of new PR applications within the standard 12-18 month processing times. ",
    },
    q4: {
      type: String,
      default:
        " Who is eligible to sponsor in Canada under the Family Reunification Program? ",
    },
    qa4: {
      type: String,
      default:
        " To be eligible to sponsor under the Family Reunification Program of Canada the sponsor must be a Canadian permanent resident living in Canada or a Canadian citizen; The sponsor cannot be in prison, bankrupt, under a removal order (if a permanent resident), or charged with a serious offense; and. The sponsor cannot have been sponsored to Canada as a spouse within the last 5 years.  ",
    },

    q5: {
      type: String,
      default:
        "Can I sponsor my spouse if I am on welfare? ",
    },
    qa5: {
      type: String,
      default:
        "There's no income requirement to sponsor your spouse. You can be unemployed or working part-time, but you cannot rely on social assistance. or any welfare programs. The only exception is disability. ",
     },
    q6: {
      type: String,
      default:
        "Can you sponsor if you are on disability? ",
    },
    qa6: {
      type: String,
      default:
        "Short answer, yes. You can sponsor under the Family Reunification Program if you are on social assistance due to a disability. However, you cannot be a sponsor if you're getting social assistance for any reason other than disability.  ",
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

let familyReunificationSection = mongoose.model(
  "Family Reunification and Sponsorship",
  familyReunificationSchema
);
module.exports = familyReunificationSection;
