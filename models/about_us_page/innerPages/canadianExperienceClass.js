let mongoose = require("mongoose");
let canadianExperienceClassSchema = mongoose.Schema(
  {
    CecHeading: {
      type: String,
      default: " Canadian Experience Class (CEC)",
    },
    CecPara: {
      type: String,
      default:
        " The Canadian Experience Class (CEC) is a permanent residency immigration program designed for skilled foreign workers who have gained Canadian work experience. It is one of the fastest and most popular pathways to Canadian permanent residency, with processing times typically taking 3-4 months.",
    },

    //
   //
        EligibilityHeading: {
            type: String,
            default: "Eligibility Criteria for Canadian Experience Class (CEC)",
          },

          EligPara: {
            type: String,
            default: "To be eligible for the CEC, you must meet the following requirements:",
          },

          e1: {
            type: String,
            default: "Have at least one year of paid skilled work experience in Canada. This means you must have worked in a job that is categorized as skilled in the National Occupational Classification (NOC). You must also have worked for at least 1,560 hours (30 hours per week for 52 weeks) over a 12-month period.",
          }, 
         e2: {
            type: String,
            default: "Have gained your work experience while authorized to work in Canada. You must have been legally permitted to work in Canada while you were employed.",
          }, 

         e3: {
            type: String,
            default: "You cannot count the work experience that you gained while you were a visitor or student.",
          }, 

          e4: {
            type: String,
            default: "Have performed the main duties of your job and have been able to perform most of the duties listed in the lead statement of the occupational description for your job.",
          }, 
         e5: {
            type: String,
            default: "A valid language test score for English or French is required, depending on the occupation.",
          }, 
          e6: {
            type: String,
            default: "You should meet the minimum Canadian Experience Class Comprehensive Ranking System (CRS) score in the Express Entry system",
          }, 

          //
          ExpressEntryHead: {
            type: String,
            default: "Express Entry FSWP Draws History",
          }, 

         
  //    

  HowToApplyHeading: {
    type: String,
    default: "How to Apply for the Canadian Experience Class (CEC) Program",
  },

ha1: {
    type: String,
    default: "Create an Express Entry profile and submit your information, including your work experience, language skills, and education. Or even better and stress-free solution, let us handle your case for you. ",
  },
  ha2: {
    type: String,
    default: "Next, receive an invitation to apply from IRCC. Note that only the highest-ranked candidates receive an invitation to apply for permanent residence",
  },
  ha3: {
    type: String,
    default: "Once you receive the ITA, submit your complete application, including supporting documents and fees, within 60 days.",
  },
  ha4: {
    type: String,
    default: "Wait for processing. IRCC will assess your application and decide whether to grant you permanent residence.",
  },
  //
      RefusalHeading: {
        type: String,
        default: "Common Reasons for Refusals of Canadian Experience Class (CEC) Program",
      },

      r1: {
        type: String,
        default: "Your application is incomplete and has inaccurate information.",
      },
      r2: {
        type: String,
        default: "You did not include the essential paperwork, like work experience letters, language test results, and your passport.",
      },
      r3: {
        type: String,
        default: "Your profile may not be strong enough if it doesn't meet the minimum requirements for factors like age, education, work experience, language skills, and job offer.",
      },
      r4: {
        type: String,
        default: "If you have any criminal convictions or health conditions that could make you inadmissible to Canada, check your admissibility status with the Canadian government to avoid any surprises. Or let us handle it for you.",
      },
      r5: {
        type: String,
        default: "You are a refugee claimant in Canada.",
      },
      r6: {
        type: String,
        default: "Gained your work experience in Canada without temporary resident status",
      },
      r7: {
        type: String,
        default: "You are working in Canada without authorization",
      },
  //


  StillNotSureHeading: {
    type: String,
    default: "Still Not Sure?",
  },

  s1: {
    type: String,
    default:
      "If you have received a refusal or have doubts regarding your case and application, don't worry. With over a decade of experience, we specialize in handling Express Entry Programs. Our approval rate for these programs is nearly 100%, achieved through a tailored approach to your specific case and using similar successful cases as precedents.",
  },
  s2: {
    type: String,
    default:
      "At Brightlight Immigration, our dedicated team of visa application specialists will assist you from the start of the application process all the way to obtaining your PR. Start your process now.",
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
        "How can I increase my chances of getting an ITA through the CEC?",
    },
    qa1: {
      type: String,
      default:
        " There are a few things you can do to increase your chances of getting an ITA through the CEC such as meet the minimum CRS score, become a skilled worker in a high-demand occupation, have a strong work history in Canada, be fluent in English or French, choose the right Express Entry profile type, etc. ",
    },
    q2: {
      type: String,
      default:
        "What are the different types of work experience that can be counted towards the CEC?",
    },
    qa2: {
      type: String,
      default:
        "The following types of work experience can be counted towards the CEC: <ul> <li>Full-time work experience: This is work that is at least 30 hours per week.</li> <li>Part-time work experience: This is work that is less than 30 hours per week, but it must be a minimum of 15 hours per week.</li> </ul>",
    },

    q3: {
      type: String,
      default:
        "Can I apply for the CEC if my work experience is in a non-skilled occupation?",
    },
    qa3: {
      type: String,
      default:
        " No, you cannot apply for the CEC if your work experience was in a non-skilled occupation. The CEC is designed for skilled workers who have lived and worked in Canada temporarily. To be eligible, you must have worked in a skilled occupation that is on the Canadian National Occupation Classification (NOC) list of eligible occupations. The NOC lists all occupations in Canada and classifies them into skill levels. Skilled occupations are classified as NOC TEER 0,1,2 or 3. Non-skilled occupations are classified as NOC TEER 4 and 5. ",
    },
    q4: {
      type: String,
      default:
        " Can I apply for the CEC if I have a temporary work permit that is about to expire?",
    },
    qa4: {
      type: String,
      default:
        "  Yes, you can apply for the CEC even if your temporary work permit is about to expire. However, you will need to ensure that your work permit is valid for the duration of your eligible work experience. ",
    },
    q5: {
      type: String,
      default:
        "Can I apply for the CEC if I have dependents?",
    },
    qa5: {
      type: String,
      default:
        "Yes, you can apply for the CEC with your dependents, such as your spouse or common-law partner, and your children under the age of 22. Your dependents will be eligible to apply for permanent residence along with you if they meet the eligibility requirements.",
    },
    q6: {
      type: String,
      default:
        "   ",
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

let canadianExperienceClassSection = mongoose.model(
  "Canadian Experience Class (CEC) program",
  canadianExperienceClassSchema
);
module.exports = canadianExperienceClassSection;
