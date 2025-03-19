let mongoose = require("mongoose");
let adoptionSchema = mongoose.Schema(
  {
    adoptionHeading: {
      type: String,
      default: "Canada's Adoption Program",
    },
    adoptionPara1: {
      type: String,
      default:
        "The heart-warming journey of bringing a child into your life through adoption is an incredible act of love and commitment, offering the child a nurturing home and a lifetime of opportunities.",
    },
    adoptionPara2: {
      type: String,
      default:"Canada's adoption program under family reunification and sponsorship provides a pathway for eligible Canadians to adopt children from both within Canada and internationally. The program aims to provide permanent homes for children who cannot live with their biological families due to various circumstances."
    },
    TwoMainHeading: {
        type: String,
        default: "There are two main types of adoption under family sponsorship in Canada:",
      },

      TwoMainPara1: {
      type: String,
      default: "Intra-country adoption. This involves adopting a child from another province in Canada.",
    },

    TwoMainPara2: {
        type: String,
        default: "Inter-country adoption. This involves adopting a child from another country.",
      },
//
      IntraHeading: {
      type: String,
      default: "Intra-Country Adoption (Inside Canada)",
    },
    IntraSubHead: {
      type: String,
      default: "Intra-country adoption involves adopting a child from another province within Canada.",
    },
    IntraListHead: {
        type: String,
        default: "How to Apply for Intra-Country Adoption:",
      },
      
      IL1: {
        type: String,
        default:
          "Fill out the adoption application.",
      }, 
      IL2: {
        type: String,
        default:
          "Attend an adoption orientation.",
      }, 
      IL3: {
        type: String,
        default:
          "Get matched with a child.",
      }, 
      IL4: {
        type: String,
        default:
          "Complete a home study.",
      }, 
      IL5: {
        type: String,
        default:
          "Receive approval from the provincial adoption authority.",
      }, 
      IL6: {
        type: String,
        default:
          "Finalize the adoption.",
      }, 
//
InterHeading: {
    type: String,
    default: "Inter-Country Adoption (Outside Canada)",
  },
  InterSubHead: {
    type: String,
    default: "Inter-country adoption involves adopting a child from another country.",
  },
  InterListHead: {
      type: String,
      default: "How to Apply for Inter-Country Adoption:",
    },
    
    IrL1: {
      type: String,
      default:
        "Choose a child from the available list.",
    }, 
    IrL2: {
      type: String,
      default:
        "Complete a home study and provide financial documentation.",
    }, 
    IrL3: {
      type: String,
      default:
        "Receive approval from the Canadian government and the child's country of origin.",
    }, 
    IrL4: {
      type: String,
      default:
        "Travel to the child's country of origin to finalize the adoption.",
    }, 
    IrL5: {
      type: String,
      default:
        "Return to Canada with the child.",
    }, 


//
    EligibilityHeading: {
      type: String,
      default: "Eligibility Criteria for Adoption in Canada",
    },

    e1: {
      type: String,
      default:
        "Be a Canadian citizen or permanent resident.",
    },
    e2: {
      type: String,
      default:
        "Be at least 18 years of age.",
    },
    e3: {
      type: String,
      default:
        "Have a stable income and living situation.",
    },
    e4: {
      type: String,
      default: "Be able to provide for the child's physical and intellectual needs.",
    },
    e5: {
        type: String,
        default: "Pass a criminal background check and medical assessment.",
      },
      e6: {
        type: String,
        default: "Provide references from other families and professionals.",
      },
    EligibilityNote: {
      type: String,
      default:
        "Note that if you are adopting a child from abroad, you will need to sponsor the child for permanent residency in Canada. This means that you will be financially responsible for the child's care until they reach the age of majority.",
    },
   
    RefusalHeading: {
      type: String,
      default: "Common Reasons for Refusals of Adoption Program",
    },
    RefusalSubHead: {
        type: String,
        default: "Failing to meet the eligibility criteria to be eligible to sponsor a child for adoption that is:",
      },
    r1: {
      type: String,
      default:
        "Incomplete or inaccurate information on your application or during interviews.",
    },
    r2: {
      type: String,
      default:
        "In some cases, the child may have health concerns that make adoption difficult. The government may refuse adoption if it believes that the child's health needs are too great for the adoptive parents to meet.",
    },
    r3: {
      type: String,
      default:
        "The child's home country may refuse consent due to concerns about the child's well-being or cultural suitability in Canada.",
    },

    StillNotHeading: {
      type: String,
      default: "Still not sure?",
    },
    s1: {
      type: String,
      default:
        "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have successfully obtained approvals for clients with multiple previous refusals by using a tailored approach, addressing each concern listed in previous refusals, and applying case law precedents. Our high success rate is a testament to our expertise.",
    },
    s2: {
      type: String,
      default:
        "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
    },

    IntraCountryAncHeading: {
      type: String,
      default:
        "Intra-Country Adoption",
    },
    InterCountryAncHeading: {
      type: String,
      default:
        "Inter-Country Adoption",
    },



    howApplySponsoringChildAdopHeading: {
      type: String,
      default:
        "How to apply for sponsoring a child for adoption?",
    },
    ForIntraCountryAdopHead: {
      type: String,
      default:
        "For Intra-Country Adoption (Inside Canada)",
    },
    ForInterCountryAdopHead: {
      type: String,
      default:
        "For Inter-Country Adoption (Outside Canada)",
    },

    YouCannotSponHeading: {
      type: String,
      default:
        " You can’t sponsor your brother, sister, nephew, niece or grandchild if:",
    },

    
    ycLi1: {
      type: String,
      default:
        "one of their parents is still alive ",
    },
    ycLi2: {
      type: String,
      default:
        "no one knows where their parents are",
    },
    ycLi3: {
      type: String,
      default:
        "their parents abandoned them",
    },
    ycLi4: {
      type: String,
      default:
        " someone else other than their parents is taking care of them while one or both their parents are alive",
    },
    ycLi5: {
      type: String,
      default:
        "their parent is in jail or otherwise detained",
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
        "Who is eligible to sponsor a child for adoption under the program?  ",
    },
    qa1: {
      type: String,
      default:
        " To be eligible to sponsor a child for adoption under the program, you must be a Canadian citizen or permanent resident who is at least 18 years of age. You must also be able to provide a stable and loving home for the child, and you must pass a criminal background check and medical assessment.",
    },
    q2: {
      type: String,
      default:
        "How long does it take to adopt a child under this program?   ",
    },
    qa2: {
      type: String,
      default:
        "   The processing time for adoption applications can vary depending on the type of adoption. However, it typically takes 12-24 months to complete the adoption process.",
    },

    q3: {
      type: String,
      default:
        "  What support services are available to adoptive families? ",
    },
    qa3: {
      type: String,
      default:
        " The Canadian government provides several support services to adoptive families, including pre-adoption counseling and support, ongoing support for adoptive families, and information on resources and services for adoptive families.",
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

let  adoptionSection = mongoose.model(
  "Adoption Section",
  adoptionSchema
);
module.exports =  adoptionSection;
