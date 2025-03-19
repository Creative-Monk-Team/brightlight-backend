let mongoose = require("mongoose");
let dualintentVisaSchema = mongoose.Schema(
  {
    dualintentVisaHeading: {
      type: String,
      default: "Dual Intent Visa",
    },
    dualintentVisaPara1: {
      type: String,
      default:
        "A Dual Intent Visa allows you to have two different reasons for visiting Canada. This means you can come to Canada temporarily with the option of considering permanent residence in the future or vice versa. Typically, these applications are made by individuals who already have a temporary resident visa and have either applied or are planning to apply for permanent resident status in Canada. This flexibility is what makes this visa type unique and called Dual Intent.",
    },
    dualintentVisaPara2: {
        type: String,
        default:
          "At Brightlight Immigration, we understand that demonstrating Dual Intent can be complex. With over 12 years of experience, we aim to simplify this process for you.",
      },

    //
    ComScenHeading: {
        type: String,
        default: "Common Scenarios",
      },
 
      c1: {
        type: String,
        default: "If you've applied for permanent residence through spousal sponsorship and wish to reunite with your spouse in Canada while waiting for your PR application, you can apply for a Dual Intent Visa to temporarily visit and live with your spouse in Canada.",
      }, 
      c2: {
        type: String,
        default: "If you’ve submitted an Express Entry profile and are in the application process, you can apply for a Dual Intent Visa to temporarily visit Canada or apply for a work/study permit while your permanent residency application is in process. This allows you to stay in Canada and experience the country during your PR application review.",
      }, 

    //
    //
    KeyHeading: {
        type: String,
        default: "Key Considerations",
      },
 
      k1: {
        type: String,
        default: "Dual Intent Visa for Outland Spouse: Navigating the waiting period during spousal sponsorship application processing can be challenging for newly married couples. These applications often take a considerable amount of time to process. However, there is an alternative: the Dual Intent Visitor Visa. In most cases, this visa is approved within 30 days and boasts a remarkable success rate of over 90%.",
      }, 
      k2: {
        type: String,
        default: "If a spouse or partner can convincingly demonstrate that they will leave Canada at the end of their authorized stay, even if their permanent residence application is rejected, officers may issue a temporary resident visa (TRV).",
      }, 
        //
        EligibilityHeading: {
            type: String,
            default: "Eligibility Criteria",
          },

          EligPara: {
            type: String,
            default: "Immigration officers carefully review your application for temporary residence to ensure you're eligible to stay in Canada and that you have genuine intentions. They consider various factors that affect your ability to support yourself and your plans for the future. Here are some key considerations for dual intent applications:",
          },

          e1: {
            type: String,
            default: "How long do you intend to stay in Canada? Provide a specific timeframe.",
          }, 
         e2: {
            type: String,
            default: "How will you support yourself financially during your stay in Canada? Share your sources of income, etc.",
          }, 

         e3: {
            type: String,
            default: "Clearly express the reason for your visit to Canada. Elaborate on the specific circumstances surrounding your trip.",
          }, 

          e4: {
            type: String,
            default: "Ensure the documents you submit with your visa application are genuine and accurate.",
          }, 
         e5: {
            type: String,
            default: "Provide evidence of your past compliance with Canadian immigration regulations and the information provided in your biographic and biometric records.",
          }, 
          e6: {
            type: String,
            default: "If your visa application is refused, what are your plans for returning to your home country? Outline a clear contingency plan.",
          }, 
          e6Para :{
            type: String,
            default: "Under the recent changes to family reunification policies, immigration officers will now consider additional factors when assessing applications.",
          }, 
          //
         eSubHead1: {
            type: String,
            default: "In cases of Spousal and Partners:",
          }, 

          e7: {
            type: String,
            default: "Immigration officers will evaluate whether your sponsorship application has been approved.",
          }, 
          e8: {
            type: String,
            default: "Immigration officers will assess the progress of your permanent residence application, including whether stage one has been approved.",
          }, 
          e9: {
            type: String,
            default: "The office will check if you have received your AOR or not.",
          }, 
          e10: {
            type: String,
            default: "Immigration officers will also assess the ties to your home country.",
          }, 
          e11: {
            type: String,
            default: "What will your plans be for returning home in case your permanent residence application is denied?",
          }, 

          //

          eSubHead2: {
            type: String,
            default: "In the cases of Parents and Grandparents:",
          }, 
          e12: {
            type: String,
            default: "Immigration officers will consider whether your permanent residence applications are in progress.",
          }, 
          e13: {
            type: String,
            default: "They will assess whether your primary intention is to visit Canada temporarily and not seek permanent residency.",
          }, 
          //
          
  //    
      RefusalHeading: {
        type: String,
        default: "Common Reasons for Refusal",
      },

      r1: {
        type: String,
        default: "Failure to demonstrate genuine dual intent is a common reason for your dual intent visa application to be refused.",
      },
      r2: {
        type: String,
        default: "The visa officer is not satisfied that you will leave Canada at the end of your stay.",
      },
      r3: {
        type: String,
        default: "The visa officer is not satisfied that you have strong ties to your home country.",
      },
      r4: {
        type: String,
        default: "The visa officer is not satisfied with your purpose for traveling to Canada temporarily.",
      },
      r5: {
        type: String,
        default: "You have previous visa refusals on record that were not justified in your current application.",
      },
  //


  StillNotSureHeading: {
    type: String,
    default: "Still Not Sure?",
  },

  s1: {
    type: String,
    default:
      "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have got approvals for clients who had multiple previous refusals.",
  },
  s2: {
    type: String,
    default:
      "We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
  },

  s3: {
    type: String,
    default:
      "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process all the way to obtaining your visa. Start your process now.",
  },
//
    WhyChooseUsHeading: {
      type: String,
      default: "Why Choose Us?",
    },

    WhyChooseUsPara: {
      type: String,
      default:
        "At Brightlight Immigration, we provide expert guidance and support throughout your immigration journey. Our dedicated team is committed to achieving the best possible outcomes for our clients.",
    },

    e7: {
      type: String,
      default: " What connections do you have that will ensure your return to your home country after you visit Canada? Share concrete examples.",
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
        " What is a Dual Intent Visa for Canada? ",
    },
    qa1: {
      type: String,
      default:
        "A dual intent means you have 2 intentions to come to Canada. It allows you to apply for both temporary and permanent residence simultaneously. This means that you can enter Canada as a visitor while your permanent residence application is being processed. While dual intent is a legitimate reason to apply for a visa, it can be challenging to demonstrate both intentions convincingly. Failure to prove the genuineness of your dual intent is a common cause for visa applications refusal. ",
    },
    q2: {
      type: String,
      default:
        "   What is an example of a dual intent visa? ",
    },
    qa2: {
      type: String,
      default:
        " Here are two examples of dual intent visas: <ul> <li>Your spouse has sponsored you for permanent residence under the spousal sponsorship program and then applied for a dual intent visa for you to travel to Canada while your permanent residence application is being processed.</li> <li>Your Canadian citizen child has sponsored you for permanent residence under the family sponsorship program and then applied for a dual intent visa so you can travel to Canada and stay with them while your sponsorship application is being processed.</li>  </ul> ",
    },

    q3: {
      type: String,
      default:
        " How long does it take for a Dual Intent Visa? ",
    },
    qa3: {
      type: String,
      default:
        " The general processing time for a dual intent visa is approximately 30 days for most countries.",
    },
    q4: {
      type: String,
      default:
        " Can I work on a Dual Intent Visa for Spousal application while I am inside Canada? ",
    },
    qa4: {
      type: String,
      default:
        " No, a dual intent visa does not grant you the right to work in Canada. It only allows you to stay in Canada while your permanent residence application is being processed. However, once you enter Canada, you may be eligible to apply for an open work permit, which would allow you to work while your permanent residence application is pending.   ",
    },

    q5: {
      type: String,
      default:
        " What are the reasons for refusal for Dual Intent Visa?",
    },
    qa5: {
      type: String,
      default:
        "  The most common reason for denial of a dual intent visa is the failure to demonstrate genuine dual intent. Immigration officers must be convinced that you have a genuine intention to both visit Canada temporarily and eventually apply for permanent residence. ",
     },
    q6: {
      type: String,
      default:
        "How much is the fee for a Dual intent Visa? ",
    },
    qa6: {
      type: String,
      default:
        " The processing fee for a dual intent visitor visa is $100 CAD. If you have not yet completed biometrics, an additional $85 CAD fee is applicable. ",
    },

    q7: {
      type: String,
      default:
        "  Is dual Intent Legal in Canada? ",
    },
    qa7: {
      type: String,
      default:
        "  Yes, dual intent is a completely legitimate and legal process in the Canadian immigration system. Immigration officers have been provided with specific guidelines for processing dual intent visa applications, and these guidelines have been further refined in light of the Family Reunification Amendments of 2023.  ",
    },

    q8: {
      type: String,
      default:
        " Can I apply for an Open Work Permit for my Spouse while they wait for their PR?",
    },
    qa8: {
      type: String,
      default:
        " Outland Sponsorship and Work Permits: <ul> <li>Unfortunately, you cannot apply for an open work permit for your spouse under the Outland sponsorship category.</li> <li>However, there is an alternative: you can apply for a Dual Intent Visitor Visa. If approved, your spouse can travel to Canada. Once they arrive, they become eligible to apply for an Open Work Permit.</li> </ul> ",
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

let dualintentVisaSection = mongoose.model(
  "Dual Intent Visa program",
  dualintentVisaSchema
);
module.exports = dualintentVisaSection;
