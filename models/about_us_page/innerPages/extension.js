let mongoose = require("mongoose");
let extensionSchema = mongoose.Schema(
  {
    extensionHeading: {
      type: String,
      default: "Extension of Temporary Status",
    },
    extensionPara: {
      type: String,
      default:
        "The plans can change, and you may need to extend your stay in Canada for various reasons. Let us guide you to maintain your legal status in Canada.If you are visiting Canada for leisure, work, family visits, studies, or temporary employment, your circumstances may change, and you may need to extend your stay beyond the initially specified duration in your visa. In such cases, you typically need to apply for an extension to maintain valid legal status in Canada.",
    },
    extensionPara2: {
      type: String,
      default:
        " If you are visiting Canada for leisure, work, family visits, studies, or temporary employment, your circumstances may change, and you may need to extend your stay beyond the initially specified duration in your visa. In such cases, you typically need to apply for an extension to maintain valid legal status in Canada.",
    },

//


BenifitHeading: {
    type: String,
    default: "Benefits of Extending Your Temporary Status",
  },
  
b1: {
  type: String,
  default: "You can stay longer in Canada after applying for an extension, without having to leave Canada and come back.",
},
b2: {
  type: String,
  default: "By not needing to travel outside of Canada, you save money on travel expenses such as flights, accommodation, and other associated costs.",
},
b3: {
    type: String,
    default: "Applying for an extension ensures that you adhere to Canadian immigration laws and regulations, avoiding any potential penalties or issues with future visa applications.",
  },

  //
    HowToApplyHeading: {
      type: String,
      default: "How to Apply for an Extension of Temporary Status?",
    },
    HowToApplySubHead: {
        type: String,
        default: "To extend your visitor status in Canada, you'll need to gather the following documents. Please note that this is a general list, and you may be required to provide additional documents depending on your specific circumstances.",
      },

    ha1: {
      type: String,
      default:
        "Complete the appropriate visitor record extension application forms.",
    },
    ha2: {
      type: String,
      default:
        "Pay the applicable application fee.",
    },
    ha3: {
      type: String,
      default:
        "Submit a copy of your valid passport.",
    },
    ha4: {
        type: String,
        default:
          "Provide evidence of sufficient financial funds to support yourself.",
      },

      ha5: {
        type: String,
        default:
          "Provide a strong reason why you want to continue to live in Canada.",
      },

      ha6: {
        type: String,
        default:
          "Provide compelling reasons about why you will leave Canada after the end of the proposed stay.",
      },
//
  
      StillNotHeading: {
        type: String,
        default: "Still not sure?",
      },
      s1: {
        type: String,
        default:
          "If you have received a refusal for any reason, do not worry. With over a decade of experience, we specialize in previously refused cases. We have secured approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
      },
      s2: {
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
          "We offer personalized service and expert advice to ensure your application stands the best chance of approval. Our dedicated team of professionals will guide you through every step of the process, addressing all your concerns and providing you with peace of mind.",
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
        " How can I extend my stay in Canada?",
    },
    qa1: {
      type: String,
      default:
        " If you wish to extend your visitor stay in Canada beyond the initial 6 months granted upon entry, you must apply for a visitor record extension. The visitor record is not a visa but rather a permit that allows you to stay in Canada for an extended period beyond the initial six-month authorization. ",
    },
    q2: {
      type: String,
      default:
        "How much does it cost to apply for an extension?",
    },
    qa2: {
      type: String,
      default:
        " The cost of extending your visitor status is $100 CAD per person and requires submitting a visitor record application.",
    },

    q3: {
      type: String,
      default:
        "Can I apply for an extension more than once?",
    },
    qa3: {
      type: String,
      default:
        "You can apply to extend your visitor status, study permit, or work permit as many times as you need, as long as you meet the eligibility criteria of the program.",
    },
    q4: {
      type: String,
      default:
        " How long do I have to apply for extension in Canada?",
    },
    qa4: {
      type: String,
      default:
        "  To apply for a visitor visa extension, IRCC recommends submitting your application at least 30 days before your current status expires. However, we recommend applying as soon as you have decided to stay longer in Canada. You should definitely about before the expiry of current status.  ",
    },

    q5: {
      type: String,
      default:
        "How long does it take to get my visitor visa extension in Canada? ",
    },
    qa5: {
      type: String,
      default:
        " The average processing time for visitor visa extensions in Canada can range from 45 to 80 days. For more accurate and updated processing times, please contact our office at 604-503-3734. ",
     },
    q6: {
      type: String,
      default:
        " Can I extend my visitor visa in Canada if I overstayed? ",
    },
    qa6: {
      type: String,
      default:
        " Visitors are generally granted a stay of up to 6 months from the date of entry into Canada. However, if you have overstayed your visa and not applied for an extension, you have a maximum of 90 days to restore your status. Please contact our office at 604-503-3734 to discuss your options and determine the best course of action. ",
    },

    q7: {
      type: String,
      default:
        "What happens if I stay longer than 6 months in Canada as a Visitor? ",
    },
    qa7: {
      type: String,
      default:
        "  If you stay beyond the initial 6-month visitor visa duration, you have the option to restore your status within 90 days of its expiration. However, once you go beyond the 90-day window, you can apply for temporary resident permit. If you do not plan to submit any application, it&#39;s strongly advised that you voluntarily leave Canada.  ",
    },

    q8: {
      type: String,
      default:
        " ",
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

let extensionSection = mongoose.model(
  "Extension of Temporary Status",
  extensionSchema
);
module.exports = extensionSection;
