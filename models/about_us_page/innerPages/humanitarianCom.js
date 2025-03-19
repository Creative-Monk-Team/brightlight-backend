let mongoose = require("mongoose");
let humanitarianComSchema = mongoose.Schema(
  {
    HumaniHeading: {
      type: String,
      default: "Canada Humanitarian and Compassionate (H&C) Program",
    },
    HumaniPara1: {
      type: String,
      default:
        "Unlike traditional immigration programs that prioritize factors like education, work experience, and language proficiency, the Humanitarian and Compassionate (H&C) program focuses on the human element, acknowledging that life's challenges can be tough and unpredictable.",
    },
    HumaniPara2: {
      type: String,
      default:"The Humanitarian and Compassionate (H&C) program allows Canadian citizens and permanent residents to sponsor certain family members who meet the H&C criteria. This program focuses on individuals or families who, despite their efforts, end up in difficult situations and can't go through the usual immigration process.."
    },

    //

    WhoCanAppHeading: {
        type: String,
        default: "Who Can Apply Under the Humanitarian and Compassionate (H&C) Program for Family Reunification?",
      },
      WhoCanAppPara: {
          type: String,
          default: "If you are a Canadian citizen or permanent resident, you can sponsor certain family members under the H&C program if you can show that the family member is eligible for H&C consideration based on one or more of the following factors:",
        },
      wL1: {
        type: String,
        default: "The family member is at risk of suffering significant hardship or harm if they are not allowed to stay in Canada.",
      },
      wL2: {
        type: String,
        default:
          "The family member has already established strong ties to Canada and would experience significant hardship if they were forced to leave.",
      },
      wL3: {
          type: String,
          default:
            "The family member's case presents unique and compelling circumstances that warrant humanitarian consideration. This could include medical conditions, domestic violence, or other exceptional factors.",
        },



    //

    //
    FewExamHeading: {
        type: String,
        default: "Here are a few examples of Humanitarian and Compassionate (H&C) cases under family reunification:",
      },
     
      feL1: {
        type: String,
        default: "A child who has been separated from their parents due to war or persecution in their home country.",
      },
      feL2: {
        type: String,
        default:
          "A spouse or common-law partner who has been living outside Canada and has no family or support network in their home country.",
      },
      feL3: {
          type: String,
          default:
            "A dependent child who needs special medical care that is not available in their home country.",
        },

        feL4: {
            type: String,
            default:
              "A sponsor who is elderly or ill and cannot travel to their home country to bring their family members to Canada.",
          },

    //

      EligibilityHeading: {
      type: String,
      default: "Eligibility Criteria for the Humanitarian and Compassionate (H&C) Program",
    },
      EligibilitySubHeading: {
        type: String,
        default: "To be eligible for H&C sponsorship under the family reunification program, you must meet the following criteria:",
      },
    e1: {
      type: String,
      default: "You must be a spouse, common-law partner, or parent of a Canadian citizen or permanent resident.",
    },
    e2: {
      type: String,
      default:
        "The Canadian citizen or permanent resident should be living in Canada at the time of your application.",
    },
    e3: {
        type: String,
        default:
          "You must show proof of the difficulties you'll face if you can't stay in Canada.",
      },
      e4: {
        type: String,
        default:
          "Your case must present unique and compelling circumstances that need humanitarian consideration.",
      },

  //


  //
    HowApplyHeading: {
      type: String,
      default: "How to Apply for the Humanitarian and Compassionate (H&C) Program",
    },
    ha1: {
      type: String,
      default:
        "Collect all relevant evidence to support your H&C claims.",
    },
    ha2: {
      type: String,
      default:
        "Fill out the necessary forms and submit your application to IRCC.",
    },
    ha3: {
      type: String,
      default:
        "Your sponsor will attend an interview with an IRCC officer on your behalf.",
    },

    RefusalHeading: {
      type: String,
      default: "Common Reasons for Refusals of the Humanitarian and Compassionate (H&C) Program",
    },
    r1: {
      type: String,
      default:
        "You did not provide enough evidence to support your H&C claims. This could include evidence of hardship, integration, or humanitarian reasons.",
    },
    r2: {
      type: String,
      default:
        "You provided unclear or inconsistent information in your application, making it difficult for an IRCC officer to understand your situation and make a decision.",
    },
    r3: {
      type: String,
      default:
        "You may be inadmissible to Canada based on other grounds, such as criminality, health, or financial reasons.",
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
        "  What is the H&C program?",
    },
    qa1: {
      type: String,
      default:
        "  The H&C program is a discretionary immigration program that allows certain individuals who would not otherwise be eligible under Canada's regular immigration programs to apply for permanent residence. The program is designed to provide humanitarian assistance to individuals who are facing exceptional circumstances that warrant consideration.",
    },
    q2: {
      type: String,
      default:
        "  What are the processing times for H&C applications under family reunification? ",
    },
    qa2: {
      type: String,
      default:
        " . Processing times for H&C applications under family reunification can vary depending on the complexity of the case. Typically, applications can take up to two years to be processed. ",
    },

    q3: {
      type: String,
      default:
        " What are the costs involved in applying for the H&C program under family reunification? ",
    },
    qa3: {
      type: String,
      default:
        "  There are a number of fees involved in applying for the H&C program under family reunification. These fees include processing fees, medical exam fees, and translation fees. The total cost of an application can vary depending on the complexity of the case.",
    },
    q4: {
      type: String,
      default:
        " What are my chances of success in applying for the H&C program under family reunification? ",
    },
    qa4: {
      type: String,
      default:
        " The chances of success in applying for the H&C program under family reunification depend on the specific circumstances of your case. However, the program is designed to help individuals who are facing exceptional circumstances that make it difficult for them to remain in their home country.  ",
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

let humanitarianComSection = mongoose.model(
  "Humanitarian and Compassionate (H&C) Program",
  humanitarianComSchema
);
module.exports = humanitarianComSection;
