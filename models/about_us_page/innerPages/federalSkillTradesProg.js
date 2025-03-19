let mongoose = require("mongoose");
let federalSkillTradesProgSchema = mongoose.Schema(
  {
    TradProgHeading: {
      type: String,
      default: "Federal Skilled Trades Program (FSTP)",
    },
    TradProgPara1: {
      type: String,
      default:
        "If you're a skilled tradesperson with a passion for building, fixing, or creating, Canada's Federal Skilled Trades Program (FSTP) can open doors to a rewarding career and a fulfilling new life in Canada.",
    },
    TradProgPara2: {
        type: String,
        default:
          "The Federal Skilled Trades Program (FSTP) is an immigration pathway for skilled tradespeople who want to become permanent residents of Canada. It is one of several streams under the Express Entry immigration system, designed to address labor shortages in Canada's skilled trades sector. Skilled tradespeople are in high demand across Canada in various industries, including construction, manufacturing, and healthcare.",
      },
  
    //
   //
        EligibilityHeading: {
            type: String,
            default: "Eligibility Criteria for Federal Skilled Trades Program (FSTP)",
          },

          EligPara: {
            type: String,
            default: "If you're a skilled tradesperson looking to immigrate to Canada, the Federal Skilled Trades Program (FSTP) could be a great option for you. To be eligible, you must meet the following requirements:",
          },

          e1: {
            type: String,
            default: "Two years of paid full-time work experience (or an equal amount of part-time work experience) in a skilled trade within the last five years.",
          }, 
         e2: {
            type: String,
            default: "Your work experience must be in one of the following categories",
          }, 
          e2SubLi1: {
            type: String,
            default: "Major Group 72: Technical Trades and Transportation Officers and Controllers",
          }, 
          e2SubLiSub1: {
            type: String,
            default: "Excluding Sub-Major Group 726: Transportation Officers and Controllers",
          }, 
          e2SubLi2: {
            type: String,
            default: "Major Group 73: General Trades",
          }, 
          e2SubLi3: {
            type: String,
            default: "Major Group 82: Supervisors in Natural Resources, Agriculture, and Related Production",
          }, 
          e2SubLi4: {
            type: String,
            default: "Major Group 83: Occupations in Natural Resources and Related Production",
          }, 
          e2SubLi5: {
            type: String,
            default: "Major Group 92: Processing, Manufacturing, and Utilities Supervisors, and Utilities Operators and Controllers",
          }, 
          e2SubLi6: {
            type: String,
            default: "Major Group 93: Central Control and Process Operators and Aircraft Assembly Assemblers and Inspectors",
          }, 
          e2SubLi7: {
            type: String,
            default: "Minor Group 6320: Cooks, Butchers, and Bakers",
          }, 
          e2SubLi8: {
            type: String,
            default: "Unit Group 62200: Chefs",
          }, 
          //
         e3: {
            type: String,
            default: "Have a valid job offer from a Canadian employer or be certified in your trade by a recognized Canadian body.",
          }, 

          e4: {
            type: String,
            default: "Meet the language requirements for English or French, as set out by IRCC.",
          }, 
         e5: {
            type: String,
            default: "Have the ability to financially support yourself or your dependents in Canada.",
          }, 
          e6: {
            type: String,
            default: "Be admissible to Canada, meaning you do not have any criminal convictions or health issues that would prevent you from living in Canada.",
          }, 
          e7: {
            type: String,
            default: "Have the ability to financially support yourself or your dependents in Canada.",
          },

          //
          ExpressEntryHead: {
            type: String,
            default: "Express Entry FSTP Draws History",
          }, 

         
  //    

  HowToApplyHeading: {
    type: String,
    default: "How to Apply for the Federal Skilled Trades Program (FSTP)",
  },

ha1: {
    type: String,
    default: "Create an Express Entry profile and submit it to Immigration, Refugees and Citizenship Canada (IRCC). For a stress-free solution, let us handle your case for you.",
  },
  ha2: {
    type: String,
    default: "After that, you will receive an invitation to apply (ITA) from IRCC. Note that ITAs are issued to candidates who score high enough on the Comprehensive Ranking System (CRS), which is a points-based system that assesses candidates' eligibility for the program. click hereyou can find a link to a FSTP Calculator.",
  },
  ha3: {
    type: String,
    default: "Submit a complete application, including supporting documents such as work experience certificates, language test results, and credentials.",
  },
  ha4: {
    type: String,
    default: "Provide biometrics, which includes fingerprints and a photo.",
  },
  ha5: {
    type: String,
    default: "Obtain a medical exam and undergo security screening.",
  },
  //
      RefusalHeading: {
        type: String,
        default: "Common Reasons for Refusals of the Federal Skilled Trades Program (FSTP)",
      },

      r1: {
        type: String,
        default: "Inadequate qualifications: You do not have the necessary skills, education, or experience to perform the job duties.",
      },
      r2: {
        type: String,
        default: "Insufficient language proficiency: Your language skills do not meet the demands of the position.",
      },
      r3: {
        type: String,
        default: "Inadequate finances: You cannot show sufficient funds to support yourself or your family during their stay in the country.",
      },
      r4: {
        type: String,
        default: "Incomplete or inaccurate application: Your application is missing essential documents or contains errors.",
      },
      r5: {
        type: String,
        default: "Weak ties to your home country: You did not prove to have a strong connection to your home country, such as property or family obligations.",
      },
    
  //


  StillNotSureHeading: {
    type: String,
    default: "Still Not Sure?",
  },

  s1: {
    type: String,
    default:
      "If you have received a refusal for any of the reasons mentioned above or have doubts regarding your case and application, do not worry. With over a decade of experience, we specialize in handling Express Entry Programs. Our approval rate for these programs is nearly 100%, achieved through a tailored approach to your specific case and using similar successful cases as precedents.",
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
        " Who is eligible for the FSTP?",
    },
    qa1: {
      type: String,
      default:
        "To be eligible for the FSTP, you must: <ul> <li>Have at least two years of full-time work experience in a skilled trade that is listed on the National Occupational Classification (NOC)</li> <li>Have a recognized Canadian or foreign credential for your skilled trade</li> <li>Be able to communicate in English or French at a moderate level</li> <li>Be admissible to Canada</li> </ul> ",
    },
    q2: {
      type: String,
      default:
        "What are the required documents for the FSTP?",
    },
    qa2: {
      type: String,
      default:
        " The required documents for the FSTP will vary depending on your circumstances, but they may include: <ul> <li>A copy of your passport</li> <li>Proof of your work experience</li> <li>Proof of your education</li> <li>Proof of your language proficiency</li> <li>Medical exam results</li> <li>Police certificates</li></ul>",
    },

    q3: {
      type: String,
      default:
        "What is the processing time for the FSTP?",
    },
    qa3: {
      type: String,
      default:
        " The processing time for the FSTP can vary depending on the number of applications that are received and the complexity of your application. However, you can expect to hear back from IRCC within 6 months of submitting your application.",
    },
    q4: {
      type: String,
      default:
        "Can I apply for the FSTP without a job offer?",
    },
    qa4: {
      type: String,
      default:
        " Yes, you can still apply for the FSTP even if you don't have a job offer from a Canadian employer. However, having a job offer can significantly enhance your chances of success. If you don't have a job offer, you'll need to show strong language skills, education, and work experience to make your application competitive.",
    },
    q5: {
      type: String,
      default:
        "What happens if my FSTP application is approved?",
    },
    qa5: {
      type: String,
      default:
        " Once your FSTP application is approved, you'll be granted permanent residence in Canada. You'll receive a Confirmation of Permanent Residence (COPR), which allows you to live, work, and study in Canada permanently. ",
    },
    q6: {
      type: String,
      default:
        "  What are some of the provinces and territories with the most demand for skilled tradespeople?",
    },
    qa6: {
      type: String,
      default:
        "Ontario, Alberta, British Columbia, and Quebec are among the provinces with the highest demand for skilled tradespeople. These provinces offer a variety of job opportunities and incentives for skilled tradespeople, making them attractive destinations for immigration. ",
    },
    q7: {
      type: String,
      default:
        " ",
    },
    qa7: {
      type: String,
      default:
        "  ",
    },
    q8: {
      type: String,
      default:
        " ",
    },
    qa8: {
      type: String,
      default:
        "  ",
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
        "  ",
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

let federalSkillTradesProgSection = mongoose.model(
  "Federal Skilled Trades Program (FSTP) program",
  federalSkillTradesProgSchema
);
module.exports = federalSkillTradesProgSection;
