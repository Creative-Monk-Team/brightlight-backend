let mongoose = require("mongoose");
let temporaryResidentPermSchema = mongoose.Schema(
  {
    temporaryResidentPermrHeading: {
      type: String,
      default: "Temporary Resident Permit (TRP)",
    },
    temporaryResidentPermPara: {
      type: String,
      default:
        "It is a legal document issued by Citizenship and Immigration Canada (CIC) that allows individuals who are inadmissible to Canada to temporarily visit and stay in the country under very specific circumstances.",
    },


////

EligibilityHeading: {
    type: String,
    default: "Eligibility Criteria for Temporary Resident Permit",
  },
  EligibilityPara: {
    type: String,
    default: "The TRP is only granted when the individual's reasons for visiting Canada are compelling enough to outweigh the potential risks their presence may pose. For example, someone might receive a TRP for a work-related visit if their expertise is deemed beneficial to the Canadian economy or society, despite the reasons that initially made them inadmissible.",
  },

  ///
  ////
  /////
  HowApplyHeading: {
      type: String,
      default: "How to Apply for a Temporary Resident Permit",
    },
    HowApplyPara: {
        type: String,
        default: "To obtain a Temporary Resident Permit requires you to show a compelling purpose for your intended visit to Canada. The application process can vary depending on your country of origin. For specific country-specific requirements, kindly connect with our office at 604 503 3734.",
      },
      

//
 RefusalHeading: {
     type: String,
     default: "Common Reasons for Refusals of Temporary Resident Permit (TRP)",
  },

  RefusalSubHead: {
    type: String,
    default: "To increase your chances of securing a Temporary Resident Permit (TRP), it's crucial to be mindful of common reasons for rejection. By understanding these, you can make your application to address any potential concerns and boost your chances of approval.",
},
r1: {
    type: String,
    default: "When an individual is deemed inadmissible to Canada, it means they are prohibited from entering the country, often due to medical or criminal history issues.",
},

r2: {
    type: String,
    default: "Individuals linked to terrorism, espionage, or other threats to national security may be considered inadmissible.",
},
r3: {
    type: String,
    default: "Convictions for serious crimes, including murder, manslaughter, drug trafficking, and organized crime offenses, can lead to a refusal.",
},
r4: {
    type: String,
    default: "Involvement in criminal organizations or gangs can render an individual refusal.",
},
r5: {
    type: String,
    default: "Providing false or misleading information during the application process or any previous immigration interactions can result in a refusal.",
},
r6: {
    type: String,
    default: "Failure to comply with Canadian immigration laws, such as overstaying a visa, can make an individual inadmissible.",
},
//
      StillNotHeading: {
        type: String,
        default: "Still not sure?",
      },
      s1: {
        type: String,
        default:
          "If you have received a refusal or are inadmissible for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have obtained approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
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
          "How long can you stay in Canada with a TRP?",
      },
      qa1: {
        type: String,
        default:
          "There are typically two types of TRPs: single-entry or multiple-entry permits. A TRP can be issued on the discretion of an immigration officer for a minimum of 1 day and up to a maximum of 3 years. The duration depends on your specific situation and the length of duration an immigration officer deems necessary for your stay in Canada to fulfil your intended purpose. ",
      },

      q2: {
        type: String,
        default:
          " How much does TRP Cost, how long can it take?",
      },
      qa2: {
        type: String,
        default:
          " The TRP application fee is $200 CAD, which is non-refundable. The processing times for TRP applications can vary depending on individual circumstances, but can range from 3 months to 12 months.",
      },
  //
      q3: {
        type: String,
        default:
          "Can I apply for TRP on a Canadian Border?",
      },
      qa3: {
        type: String,
        default:
          "Yes, you can apply for a TRP at a Canadian border in an emergency situation. However, mostbTRP applications are processed online.",
      },
      q4: {
        type: String,
        default:
          " ",
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
          "   ",
       },
      q6: {
        type: String,
        default:
          " ",
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

let temporaryResidentPermSection = mongoose.model(
  "Temporary Resident Permit (TRP) program",
  temporaryResidentPermSchema
);
module.exports = temporaryResidentPermSection;
