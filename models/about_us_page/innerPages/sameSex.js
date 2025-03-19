let mongoose = require("mongoose");
let sameSexSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default:
        "Same-Sex Spousal Sponsorship in Canada",
    },
    description: {
      type: String,
      default:
        "As a permanent resident or Canadian citizen, you have the opportunity to bring your same-sex partner to Canada through the permanent residence application process. Canada, known for its progressive values, respects privacy and individual liberty for all residents. In 2005, the country legally recognized same-sex marriages, leading to the inclusion of common-law partners, same-sex spouses, and conjugal partners in the Citizenship and Immigration Canada (CIC) policies.",
    },

    eligibleCriteriaHeading: {
      type: String,
      default: "Eligibility Criteria for Same-Sex Sponsorship:",
    },
    eligibileSubHead: {
      type: String,
      default: "If you’re in a same-sex relationship and your partner resides outside Canada, you can sponsor them to join you in Canada. To qualify, consider the following criteria:",
    },

    e1: {
      type: String,
      default: "<strong>Permanent Resident or Canadian Citizen: </strong>You must be either a permanent resident or a Canadian citizen.",
    },

    e2: {
      type: String,
      default: "<strong>Marriage in Canada: </strong>If you and your same-sex partner are married within Canada, and possess a valid marriage certificate issued by a Canadian province or territory, you meet the eligibility requirements.",
    },

    e3: {
      type: String,
      default: "<strong>Marriage Outside Canada:</strong> If your marriage occurred outside Canada, you can still apply for spousal sponsorship or conjugal partner sponsorship if the marriage is legally recognized in Canada and complies with the laws of the country where it took place.",
    },
   
    SameSexPartSponHeading: {
      type: String,
      default: "Same-Sex Partner Sponsorship",
    },

    SameSexPartSponPara: {
        type: String,
        default: "In Canada, two partner categories are acknowledged: conjugal and common-law. Even if you’re not legally married to your same-sex partner, you can sponsor them to reside in Canada together.",
      },


      WhatCommonLawPartHeading: {
      type: String,
      default: "What is a Common Law Partner?",
    },
     WhatCommonLawPartPara: {
        type: String,
        default: "A Common Law Partner refers to an individual with whom you share a continuous living arrangement for more than one year, maintaining a conjugal relationship. Whether your partner is of the opposite or same gender, this definition applies for immigration purposes. Demonstrating a significant level of commitment between both parties is essential.",
      },

      ProvYourCommonLawPartHeading: {
      type: String,
      default:
        "Proving Your Common Law Partnership",
    },
    ProvYourCommonLawPartDesc: {
      type: String,
      default:
        "To establish your common-law relationship, consider the following aspects:",
    },
    py1: {
      type: String,
      default: "<strong>Shared Residence:</strong> You and your partner must reside in the same home, sharing responsibilities such as household chores.Establishment in B.C.",
    },
    py2: {
      type: String,
      default:
        " <strong>Financial and Emotional Support:</strong> Provide evidence of mutual financial arrangements and emotional support.",
    },

    py3: {
      type: String,
      default: "<strong>Parenting Together:</strong> If applicable, demonstrate that you have children together.",
    },
    py4: {
      type: String,
      default:
        "<strong>Public Presentation:</strong> Present yourselves as a couple in public settings.",
    },

    py5: {
      type: String,
      default: "<strong>Personal Behavior:</strong> Factors like fidelity, commitment, and feelings toward each other contribute to the proof.",
    },
   
    CommonLawRequDocuSponHeading: {
      type: String,
      default: "Common Law: Required Documents for Sponsorship",
    },
    CommonLawRequDocuSponPara: {
        type: String,
        default: "When applying, submit at least two of the following documents to validate your common-law relationship:",
      },
    crd1: {
      type: String,
      default: "Pay stubs or tax forms showing the same address.",
    },
    crd2: {
      type: String,
      default:
        "Proof of living together for a minimum of one year.",
    },
    crd3: {
      type: String,
      default:
        "Evidence of property ownership or shared rent",
    },

    crd4: {
      type: String,
      default: "Joint bank accounts",
    },
    crd5: {
      type: String,
      default:
        "Utility bills in both names",
    },
    crd6: {
      type: String,
      default:
        "Government-issued IDs.",
    },

    crd7: {
      type: String,
      default: "Car insurance details",
    },
    crd8: {
      type: String,
      default:
        "Birth certificates or adoption records for shared children.",
    },
    crd9: {
      type: String,
      default: "Photos portraying your conjugal relationship.",
    },

    crd10: {
      type: String,
      default: "Affirmation from family and friends (letters, emails, social media)",
    },

    CommonLawRequDocuSponPara2: {
        type: String,
        default: "If specific documents are unavailable, explore alternative ways to demonstrate your relationship. Sworn declarations or letters from trusted sources can strengthen your case. Ultimately, the visa officer’s discretion will determine the acceptance of your common-law documents, so providing ample proof enhances your chances of approval.",
      },


      WhoQualConjHeading: {
        type: String,
        default: "Who Qualifies as a Conjugal Partner?",
      },
      WhoQualConjDisc: {
        type: String,
        default: "A Conjugal Partner refers to an individual living outside of Canada with whom you share a committed and romantic relationship lasting at least one year. However, significant barriers prevent you from residing together. These barriers may include factors beyond their control, such as immigration restrictions, religious considerations, or sexual orientation.",
      },

      QualConjPartHeading: {
        type: String,
        default: "Qualifications for Conjugal Partnership",
      },
      Q1: {
        type: String,
        default: "<strong>Barriers to Living Together:</strong> Despite the inability to cohabit, your relationship must demonstrate commitment and genuine connection.",
      },
      Q2: {
        type: String,
        default: "<strong>Legal Marriage Constraints:</strong> Some conjugal partners cannot legally marry their sponsor but still qualify under this category.",
      },
   
      Q3: {
        type: String,
        default: "<strong>Similarities to Common-Law and Spousal Relationships:</strong> In all other aspects, conjugal partnerships mirror common-law unions or marriages, requiring a bona fide relationship lasting at least one year.",
      },


      ConjRelConsidHeading: {
        type: String,
        default: "Conjugal Relationship Considerations",
      },
      c1: {
        type: String,
        default: "<strong>Country-Specific Challenges:</strong> If your relationship faces obstacles due to factors like a country’s stance on same-sex marriage, lack of divorce options, or legal restrictions, it still qualifies as a conjugal relationship.",
      },
      c2: {
        type: String,
        default: "<strong>Emotional, Financial, and Physical Interdependence:</strong> Conjugal partners must rely on each other emotionally, financially, and physically.",
      },
   ////
   ConjPartReqDocSponHeading: {
    type: String,
    default: "Common Law: Required Documents for Sponsorship",
  },
  ConjPartReqDocSponPara: {
      type: String,
      default: "When applying, submit at least two of the following documents to validate your common-law relationship:",
    },
  cprd1: {
    type: String,
    default: "Completed application forms.",
  },
  cprd2: {
    type: String,
    default:
      "Proof of status in Canada",
  },
  cprd3: {
    type: String,
    default:
      "Identity documents",
  },

  cprd4: {
    type: String,
    default: "Marriage certificate",
  },
  cprd5: {
    type: String,
    default:
      "Police certificates from countries where your spouse lived for six months or longer after turning 18.",
  },
  cprd6: {
    type: String,
    default:
      "Medical certificate for your spouse",
  },

  cprd7: {
    type: String,
    default: "Proof of payment for government fees",
  },
  cprd8: {
    type: String,
    default:
      "Digital photo",
  },
  cprd9: {
    type: String,
    default: "Relationship information and sponsorship evaluation questionnaire",
  },
  cprd10: {
    type: String,
    default: "Wedding invitations and photos",
  },
  cprd11: {
    type: String,
    default: "Birth certificates or adoption records for shared children.",
  },
   
  cprd12: {
    type: String,
    default: "Proof of marriage registration with a government authority",
  },
   
   
   ///
    StillNotHeading: {
      type: String,
      default: "Still not Sure?",
    },
    StillNotPara: {
      type: String,
      default:
        "Are you facing challenges in bringing your same-sex spouse or conjugal partner to Canada? Look no further than Brightlight Immigration. With over 12 years of expertise, we specialize in creating robust same-sex sponsorship applications, ensuring your spouse, common-law partner, or conjugal partner can join you in Canada.",
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
    timestamps: true,
  }
);

let sameSexSection = mongoose.model(
  "same Sex Page",
  sameSexSchema
);
module.exports = sameSexSection;
