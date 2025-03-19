let mongoose = require("mongoose");
let visitorVisaSchema = mongoose.Schema(
  {
    visitorVisaHeading: {
      type: String,
      default: "Visitor Visa",
    },
    visitorVisaPara: {
      type: String,
      default:
        "A Visitor Visa, also known as a Temporary Resident Visa (TRV), allows people from other countries to visit Canada for a short period. Are you planning to visit Canada and need to apply for a Visitor Visa? There are several different options through which you can apply for a Visitor Visa, each with its own specific requirements. You can visit Canada for various purposes, all of which are generally covered by the Visitor Visa umbrella. For some visa-exempt countries, a simple Electronic Travel Authorisation (eTA) application can be submitted. However, if you're from a country that requires a visa, you'll need to obtain authorization to enter and stay in Canada for a specific period, which is a Temporary Resident Visa, also commonly known as Visitor Visa.",
    },

    ChooseApplHeading: {
        type: String,
        default: "Choose Your Application of Interest:",
      },
////

EligibilityHeading: {
    type: String,
    default: "Eligibility Criteria",
  },
  EligibilityPara: {
    type: String,
    default: "To obtain a visitor visa, you must meet essential requirements, which may vary depending on your individual circumstances and country of citizenship and residence.",
  },
  EligLiHead: {
    type: String,
    default: "Essential requirements include:",
  },
  e1: {
    type: String,
    default: "A passport that is valid for 6 months or more",
  },
  e2: {
    type: String,
    default: "No criminal or immigration-related convictions",
  },
  e3: {
    type: String,
    default: "Proof of strong ties to your home country",
  },
  e4: {
    type: String,
    default: "Proof of your intention to leave Canada at the end of your visit",
  },
  e5: {
    type: String,
    default: "Proof that you have enough funds to cover your stay",
  },
  e6: {
    type: String,
    default: "The amount of money you will need depends on the purpose of your visit, how long you plan to stay, and whether you will stay in a hotel or with friends or relatives.",
  },
  ///
  ////
  /////
  HowApplyHeading: {
      type: String,
      default: "How to Apply for a Visitor Visa",
    },
    HowApplyPara: {
        type: String,
        default: "To start the process of obtaining a Canadian visitor visa, you, as the applicant, must follow a series of steps and complete specific requirements, as outlined below:",
      },

      ha1: {
        type: String,
        default: "Assess your eligibility for a Canadian visitor visa.",
      },      
      ha2: {
        type: String,
        default: "Gather the necessary documents and complete the required application forms.",
      },      
      ha3: {
        type: String,
        default: "Submit your Canadian visitor visa application in accordance with IRCC guidelines and our recommendations.",
      },      
      ha4: {
        type: String,
        default: "Wait for the processing of your application and respond promptly to any additional inquiries from the authorities (if any).",
      },      
      ha5: {
        type: String,
        default: "Send your passport for the stamping of your Temporary Resident Visa (TRV).",
      },      

//
TourismVisaHeading: {
    type: String,
    default: "Tourism Visa",
 },
 TourismVisaPara: {
    type: String,
    default: "Canadian immigration allows you to visit Canada for tourism purposes and explore various tourist destinations, which are world-renowned. To apply for a visitor visa for tourism purposes, you don’t need an invitation from a Canadian citizen, permanent resident, or Canadian business. However, you must satisfy Immigration, Refugees and Citizenship Canada (IRCC) that you have sufficient funds to support your trip to Canada. If dependents are accompanying you, you’ll need to provide additional proof of funds. Furthermore, you’ll need to provide convincing reasons why you will return to your home country or country of residence after your trip is completed.",
 },

//
EmergencyVisaHeading: {
    type: String,
    default: "Emergency Visa",
 },
 EmergencyVisaPara: {
    type: String,
    default: "Canada Immigration allows for the application of an emergency visa in situations that necessitate an immediate visit to Canada. This could be due to unexpected circumstances such as emergency medical care, sudden illness, to be present during the final moments of life, end-of-life care, or the death or funeral of a family member, close relative, or friend who is residing in Canada.",
 },

////
 RefusalHeading: {
     type: String,
     default: "Common Reasons for Refusals of Visitor Visa",
  },

  RefusalSubHead: {
    type: String,
    default: "When applying for a visitor visa, visa officers often look for signs that you'll return home after your trip. They want to be sure you have the means to support yourself financially and strong reasons to stay put. Here’s how to increase your chances of approval:",
},

r1: {
    type: String,
    default: "Prove that you can afford your trip. Address any concerns about your financial ability to cover your expenses. Show your bank statements, employment contracts, or pay stubs to demonstrate a steady income, etc.",
},

r2: {
    type: String,
    default: "Highlight your attachment to home. Visa officers want to see why you're not eager to abandon your home life. Showcase your commitments to your home country.",
},
r3: {
    type: String,
    default: "Clearly express your visit's purpose and explain in detail the reason for your visit, whether it's business, tourism, medical treatment, etc.",
},
r4: {
    type: String,
    default: "Showcase your travel experience and that you intend to return home.",
},

//
      StillNotHeading: {
        type: String,
        default: "Still not sure?",
      },
      s1: {
        type: String,
        default:
          "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have obtained approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case laws and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
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
          " Does Canada give visitor visa now? ",
      },
      qa1: {
        type: String,
        default:
          " Everyone who wants to enter Canada who is not a Canadian citizen or permanent resident, or otherwise visa-exempt, requires a visitor visa.",
      },
      q2: {
        type: String,
        default:
          "  How long is Canadian visitor visa valid? ",
      },
      qa2: {
        type: String,
        default:
          " The Canadian visitor visa can be either a single or multiple entry visa. The visa can be valid for up to 10 years or until the passport expires. However, you must visit Canada before your visa expires. ",
      },
  
      q3: {
        type: String,
        default:
          "How long does it take for visitor visa Canada?  ",
      },
      qa3: {
        type: String,
        default:
          "The processing time for a visitor visa application from within Canada is 10-27 days. However, applications made from outside of Canada may take longer depending on the applicant&#39;s country of residence. Please check the IRCC&#39;s website to determine the processing time from your country of residence or contact our office at 605-503-3734 for more information. ",
      },
      q4: {
        type: String,
        default:
          "How much is Canada visitor visa fee?  ",
      },
      qa4: {
        type: String,
        default:
          " The processing fee for a Canada Visitor visa application is $100 CAD. You will also have to pay biometrics fees of $85 CAD.  ",
      },
  
      q5: {
        type: String,
        default:
          "Can a friend sponsor me to Canada for visitor visa? ",
      },
      qa5: {
        type: String,
        default:
          " A friend or family member can help you with your visitor visa application by writing a letter of invitation. This letter should explain how they will support you during your stay in Canada, such as providing accommodation or financial assistance. However, a letter of invitation alone does not guarantee visa approval.",
       },
      q6: {
        type: String,
        default:
          " What is proof of funds for visitor visa?",
      },
      qa6: {
        type: String,
        default:
          "To show that you have the financial means to support yourself during your stay in Canada, you will need to provide proof of funds. This could include original bank statements from your personal account for the past six months, the last six months of pay slips, or evidence of other financial resources. ",
      },
  
      q7: {
        type: String,
        default:
          " How to get 100% Canada tourist visa?  ",
      },
      qa7: {
        type: String,
        default:
          " While there is no guarantee of visa approval, there are several steps you can take to strengthen your application: <ul> <li>Check your eligibility for the Canada Visitor Visa.</li> <li>Collect and submit the documents required.</li> <li>- Submit the Canada Visitor Visa Application form.</li> <li>Wait for processing and provide any required additional information.</li> <li>Send your passport for stamping.</li> </ul> ",
      },
  
      q8: {
        type: String,
        default:
          "Does Canada refuse visitor visa? ",
      },
      qa8: {
        type: String,
        default:
          " Visitor visas may be refused because the applicant did not provide enough detail about the purpose of their visit to Canada. If your visit is for a specific event, you must submit evidence to support this, such as invitation letters, event details, and documentation.  ",
      },
      
      q9: {
        type: String,
        default:
          " Can I convert Canada visitor visa to work permit/study permit?",
      },
      qa9: {
        type: String,
        default:
          "  While it is possible to convert a visitor visa to a work permit or study permit, it is not guaranteed. The specific requirements and eligibility criteria for each program will vary. It is best to consult our RCIC Regulated immigration consultant to discuss your options.",
      },
      q10: {
        type: String,
        default:
          " Can I apply for visitor visa for my parents from Canada?",
      },
      qa10: {
        type: String,
        default:
          " Yes, you can apply for a visitor visa on behalf of your parents if they are not citizens or permanent residents of Canada and are not otherwise visa-exempt. However, they will need to meet all the eligibility criteria for a visitor visa, including providing proof of funds, ties to their home country, and a clear purpose for their visit.",
      },
      q11: {
        type: String,
        default:
          "Do I need an invitation letter/Sponsor to visit Canada? ",
      },
      qa11: {
        type: String,
        default:
          "An invitation letter is not mandatory for visitor visa applications. However, it can be helpful to provide a letter of invitation from someone in Canada who can vouch for your purpose of visit and provide support during your stay. It is important to note that an invitation letter alone does not guarantee visa approval. ",
      },
      q12: {
        type: String,
        default:
          "Can I sponsor a non family member to Canada? ",
      },
      qa12: {
        type: String,
        default:
          " Canada does not offer a program specifically for sponsoring non-family members to immigrate to the country. However, there are other immigration programs that may be suitable for them. Speak to our RCIC Regulated immigration consultant to discuss their options",
      },
      q13: {
        type: String,
        default:
          "Who can invite tourist in Canada? ",
      },
      qa13: {
        type: String,
        default:
          " While Canada does not have an invitation visa, you can invite a friend or family member to come and visit you in Canada. Your friend or family member will be applying for a regular tourist visa, but you can provide an invitation letter in support of their visa application.",
      },
      q14: {
        type: String,
        default:
          " Can I invite my Boyfriend, Spouse, Common law to Canada on Visitor Visa?",
      },
      qa14: {
        type: String,
        default:
          " Yes, you can invite your boyfriend, spouse, or common-law partner to Canada on a visitor visa. However, they will need to meet all of the eligibility requirements for a visitor visa, including providing proof of funds, ties to their home country, and a clear purpose for their visit.",
      },
      q15: {
        type: String,
        default:
          "My Visitor Visa got refused. What should I do? ",
      },
      qa15: {
        type: String,
        default:
          " If you have received a refusal for any of the reasons, do not worry. With over a decade of experience, we specialize in previously refused cases. We have got approvals for clients who had multiple previous refusals. Speak to our RCIC Regulated consultant at 605-503-3734 and discuss your options.",
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

let visitorVisaSection = mongoose.model(
  "Visitor Visa program",
  visitorVisaSchema
);
module.exports = visitorVisaSection;
