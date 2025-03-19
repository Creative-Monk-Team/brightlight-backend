let mongoose = require("mongoose");
let flagpolingSchema = mongoose.Schema(
  {
    flagpolingHeading: {
      type: String,
      default: "Flagpoling",
    },
    flagpolingPara1: {
      type: String,
      default:
        "Flagpoling is a legal process of exiting Canada and re-entering the country without physically crossing into the USA to obtain, change, or extend a valid status in Canada. It is commonly used to obtain a new temporary residence status, such as renewing a study permit, applying for a work permit, or finalizing the permanent residency (PR) process.",
    },
    flagpolingPara2: {
        type: String,
        default:
          "Typically, temporary resident visa holders have the option to apply through online or paper applications. However, these applications can take weeks or even months to process. Therefore, sometimes people choose to save time by going to the port of entry (aka border). This allows for quick processing, which can be helpful for people who need their application processed quickly.",
      },
  
//


BenifitHeading: {
    type: String,
    default: "Benefits of Flagpoling",
  },
  
b1: {
  type: String,
  default: "Flagpoling is a time-saving alternative to applying for a work or study permit through online or paper applications, where processing times can take weeks or even months or longer than what is mentioned on the IRCC website.",
},
b2: {
  type: String,
  default: "You do not need to gather extensive documentation, complete complex and lengthy forms, etc. Instead, candidates can present their passport and supporting documents directly to a Canada Border Services Agency (CBSA) officer, attend the interview, and obtain the new permit on the spot.",
},
b3: {
    type: String,
    default: "Many times, CBSA officers follow a more humane approach than IRCC officers and consider humanitarian and compassionate grounds in approving the application.",
  },
///


EligibilityHeading: {
    type: String,
    default: "Eligibility Criteria for Flagpoling",
  },
  EligibilitySubHead: {
    type: String,
    default: "The eligibility criteria for flagpoling are as follows:",
  },
e1: {
  type: String,
  default: "You must be currently holding a valid visitor, study, or work permit.",
},
e2: {
  type: String,
  default: "If your current status has expired, you must have applied for an extension online and have proof of application submission and receipt.",
},
e3: {
    type: String,
    default: "Do not attempt flagpoling if you are out of status or have applied for restoration of status.",
  },
  e4: {
    type: String,
    default: "You meet the requirements of the new permit that you are requesting as per IRCC guidelines.",
  },
  e5: {
    type: String,
    default: "It is recommended that you carry original documents with you at the time when the CBSA officer interviews you.",
  },
  //
  DoNotForgetHeading: {
      type: String,
      default: "Don’t Forget This Important Tip",
    },
    DoNotForgetSubHead: {
        type: String,
        default: "While flagpoling can be a helpful tool when used under the right circumstances, it's important to approach it with careful preparation and the right documentation. We strongly advocate for thorough preparation to maximize the benefits of this process. However, it's crucial to remember that flagpoling also comes with inherent risks. Potential denial of entry at both US and Canadian borders could lead to forced removal from Canada back to your home country. Additionally, flagpoling typically involves a detailed interview with a US immigration officer or CBSA border officer.",
      },

   
//
  
      StillNotHeading: {
        type: String,
        default: "Still not sure?",
      },
      s1: {
        type: String,
        default:
          "To avoid these risks and ensure a smooth flagpoling experience, we highly recommend hiring representation from a Regulated Canadian Immigration Consultant (RCIC). An RCIC can not only guide you on the necessary documents for flagpoling but also effectively prepare you for the Port of Entry and border interviews conducted by immigration officers.",
      },
      s2: {
        type: String,
        default:
          "Brightlight Immigration is available to represent you at any Point of Entry in the Lower Mainland, British Columbia. Our experienced consultants will ensure you have the necessary documentation, provide tailored guidance, and assist you in effectively communicating your case to immigration officers.",
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
          " Is Flagpoling legal in Canada?",
      },
      qa1: {
        type: String,
        default:
          "Yes, flagpoling is a legal process in Canada that involves leaving the country and then re-entering without crossing into the United States. This provision is established by IRCC and hence 100% legal.  ",
      },
      q2: {
        type: String,
        default:
          " What are the risks of flagpoling?",
      },
      qa2: {
        type: String,
        default:
          " Flagpoling, while legal in Canada, carries certain risks, including the possibility of being denied entry into both the United States and Canada. This could result in forced removal from Canada back to your home country. Additionally, flagpoling often involves a comprehensive interview with a U.S. immigration officer or CBSA border officer. ",
      },
  
      q3: {
        type: String,
        default:
          "Do I need a USA Visa to Flagpole?",
      },
      qa3: {
        type: String,
        default:
          "No, you do not need a USA visitor visa to do a flagpole. ",
      },
      q4: {
        type: String,
        default:
          " Can I Flagpole if I am out of status?",
      },
      qa4: {
        type: String,
        default:
          "  Strongly discouraged. Flagpoling is only recommended if you currently possess valid or implied status in Canada. ",
      },
  
      q5: {
        type: String,
        default:
          "Do I need to make an appointment to Flagpole?",
      },
      qa5: {
        type: String,
        default:
          " This changes time to time. Many times most border crossings in the Lower Mainland require you to schedule an appointment for flagpoling. To get the most updated information on this matter, please contact our office at 604-503-3734. ",
       },
      q6: {
        type: String,
        default:
          " What documents are required to do Flagpole?",
      },
      qa6: {
        type: String,
        default:
          " The specific documents required may vary depending on the purpose of your flagpoling, such as applying for a work permit, visitor record, or extending your study or work permit. To get a personalised checklist tailored to your specific situation, please contact our office at 604-503-3734.",
      },
  
      q7: {
        type: String,
        default:
          " ",
      },
      qa7: {
        type: String,
        default:
          "    ",
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

let flagpolingSection = mongoose.model(
  "Flagpoling program",
  flagpolingSchema
);
module.exports = flagpolingSection;
