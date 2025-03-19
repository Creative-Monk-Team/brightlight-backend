let mongoose = require("mongoose");
let DependentChildrenSchema = mongoose.Schema(
  {
    DepChildHeading: {
      type: String,
      default: "Canada’s Dependent Children Sponsorship Program",
    },
    DepChildPara1: {
      type: String,
      default:
        "The Dependent Child Program helps families stay together and gives your child the chance to go to good schools in Canada, grow up in a safe place, and be successful in the future.",
    },
    DepChildPara2: {
      type: String,
      default:"The Dependent Children Program allows Canadian citizens and permanent residents to bring their unmarried children under the age of 22 to Canada as permanent residents."
    },


      EligibilityHeading: {
      type: String,
      default: "Eligibility requirements for the dependent child:",
    },
    EligibilitySubHeading: {
        type: String,
        default: "The child must be under the age of 22 on the date the sponsorship application is submitted.",
      },
    e1: {
      type: String,
      default: "The child must be a biological or adopted child of a Canadian citizen or permanent resident sponsoring them.",
    },
    e2: {
      type: String,
      default:
        "The child must be unmarried and not in a common-law relationship on the date the sponsorship application is submitted and throughout the sponsorship process.",
    },

  //

  EligReqHeading: {
    type: String,
    default: "Eligibility requirements for the dependent child:",
  },
  e1: {
    type: String,
    default: "You must have an annual income that meets the Canadian income requirements for sponsorship.",
  },
  e2: {
    type: String,
    default:
      "You should have sufficient funds and assets to support your child.",
  },

  e3: {
    type: String,
    default:
      "You must have adequate accommodation for your child to live.",
  },




  //
    HowApplyHeading: {
      type: String,
      default: "How to apply for the Dependent Children Sponsorship Program?",
    },
    ha1: {
      type: String,
      default:
        "Collect and submit a variety of documents to support your application, such as proof of identity, proof of relationship with your child, financial documentation, and accommodation details.",
    },
    ha2: {
      type: String,
      default:
        "You and your child must attend biometrics appointments at designated Service Canada locations to provide fingerprints and photographs for processing.",
    },
    ha3: {
      type: String,
      default:
        "If the application is approved, your child will be issued a visa to travel to Canada.",
    },

    RefusalHeading: {
      type: String,
      default: "Common reasons for refusals of Canada’s Dependent Children Sponsorship Program:",
    },
    r1: {
      type: String,
      default:
        "Fails to meet the eligibility criteria for the DC Program, such as being a Canadian citizen or permanent resident, having the financial means to support the sponsored child, or having a clean criminal record.",
    },
    r2: {
      type: String,
      default:
        "Your child is not under the age of 22 or is married or in a common-law relationship.",
    },
    r3: {
      type: String,
      default:
        "You or your child may have provided false or misleading information on their application.",
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

    s2: {
      type: String,
      default:
        "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
    },

    EligSubHeadPara1: {
      type: String,
      default:
        "The child must be a biological or adopted child of a Canadian citizen or permanent resident sponsoring them.",
    },
    EligSubHeadPara2: {
      type: String,
      default:
        "The child must be unmarried and not in a common-law relationship on the date the sponsorship application is submitted and throughout the sponsorship process.",
    },
    EligSubRequListHead: {
      type: String,
      default:
        "Eligibility requirements for the sponsor:",
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
        " Who can sponsor a dependent child? ",
    },
    qa1: {
      type: String,
      default:
        " To be eligible to sponsor a dependent child, you must be a Canadian citizen or permanent resident. You must also meet the financial requirements, provide proof of legal custody of the child, and be able to prove that the child is your biological, adopted, or stepchild.",
    },
    q2: {
      type: String,
      default:
        "  What is the age limit for dependent children? ",
    },
    qa2: {
      type: String,
      default:
        "  A child is considered a dependent child if they are under the age of 22. However, there are some exceptions. Children who are 22 or older may still be eligible to be sponsored if they have depended on their parents for financial support since before they were 22 and they are unable to financially support themselves because of a physical or mental condition. ",
    },

    q3: {
      type: String,
      default:
        " What are the financial requirements for sponsoring a dependent child? ",
    },
    qa3: {
      type: String,
      default:
        "To be eligible to sponsor a dependent child, you must have enough income to provide for the child's basic needs, such as food, shelter, clothing, and medical care. You must also show that you have the savings to support the child for at least three years after they arrive in Canada. ",
    },
    q4: {
      type: String,
      default:
        " What is the medical exam for dependent children? ",
    },
    qa4: {
      type: String,
      default:
        "    All sponsored children who are over the age of 15 are required to undergo a medical exam to assess their health. The exam will determine if the child has any medical conditions that may affect their ability to live in Canada.",
    },

    q5: {
      type: String,
      default:
        "How long does the application process take? ",
    },
    qa5: {
      type: String,
      default:
        "The processing time for a dependent child sponsorship application can vary depending on several factors. However, it typically takes between 12 and 18 months to process an application. ",
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

let DependentChildrenSection = mongoose.model(
  "Dependent Children Sponsorship Program",
  DependentChildrenSchema
);
module.exports = DependentChildrenSection;
