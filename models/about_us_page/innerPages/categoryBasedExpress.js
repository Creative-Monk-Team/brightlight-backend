let mongoose = require("mongoose");
let categoryBasedExpressSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      default: "Category-Based Express Entry Selection Draws",
    },
    description1: {
      type: String,
      default:
        "Category-Based Express Entry Selection Draws",
    },
    description2: {
        type: String,
        default:
          "Category-based draws are an additional type of Express Entry draw. These draws target specific groups of Express Entry candidates who possess certain skills, qualifications, or experience that are in high demand in Canada's labor market. By focusing on specific categories, the Canadian government plans to attract highly skilled and qualified individuals to fill labor shortages and contribute to the country's economic growth.",
      },

    BenifitHeading: {
      type: String,
      default:
        "Benefits of Category-Based Express Entry Selection Draws:",
    },
    BenifitSubHead: {
        type: String,
        default:
          "Category-based draws offer several benefits to you, including:",
      },
    b1: {
      type: String,
      default:
        "Your chances of getting an ITA are Increased. By focusing on specific groups of candidates, category-based draws often have lower CRS cut-offs compared to general Express Entry draws. This means that candidates with lower CRS scores may still have a chance of receiving an ITA.",
    },
    b2: {
      type: String,
      default:
        "It is a faster pathway to Canadian Permanent Residence. Once you’re selected through a category-based draw, you can proceed directly to the application stage for permanent residence, shortening the overall immigration process.",
    },
    b3: {
      type: String,
      default:
        "Opportunities for skilled professionals in category-based draws are in demand. This means you’ll have a clear path to pursue your career in Canada. Whether you're a healthcare worker, a skilled tradesperson, or an expert in STEM fields, Canada welcomes your talents.",
    },


    SixCategoriesCategoryBasedHeading: {
        type: String,
        default:
          "Here are the 6 categories of Category-Based Express Entry Selection Draws:",
      }, 


      HowCategoryBasedDrawsWorkHeading: {
        type: String,
        default:
          "How do Category Based Draws work?",
      },

      HowCategoryBasedDrawsWorkPara: {
        type: String,
        default:
          "Category-based draws are conducted separately from regular Express Entry draws, which typically invite candidates based on their Comprehensive Ranking System (CRS) score. Instead, category-based draws target specific groups of candidates based on their qualifications, such as work experience in healthcare, French language proficiency, or STEM (Science, Technology, Engineering, and Mathematics) skills.",
      },
      
    eligibleCriteriaHeading: {
      type: String,
      default:
        "Eligibility Criteria for a Category-Based Draw",
    },
    eligibileSubHead: {
      type: String,
      default: "To be eligible for a category-based draw, you must meet all the requirements specified by IRCC for that particular category. Once a category-based draw is announced, IRCC will rank eligible candidates in the Express Entry pool based on their CRS score and select the highest-ranked candidates to receive invitations to apply (ITAs) for permanent residence. The eligibility requirements for category-based draws vary depending on the specific category. However, here are some general eligibility criteria that apply to all categories. These include:",
    },
   
    ec1: {
      type: String,
      default:
        "You must have a valid Express Entry profile.",
    },

    ec2: {
      type: String,
      default:
        "You must meet the language proficiency requirements for the selected category.",
    },
    ec3: {
        type: String,
        default:
          "Have relevant work experience in the selected category.",
      },
      ec4: {
        type: String,
        default:
          "You must meet the educational requirements for the selected category.",
      },
  

      ExpressEntryHeading: {
        type: String,
        default:
          "Express Entry Category based draws history",
      },


    howToApplyHeading: {
      type: String,
      default:
        "How to apply for Category Based Draw?",
    },
    ha1: {
      type: String,
      default:
        "Create an Express Entry profile first. Or even better and stress-free solution, let us handle your case for you.",
    },
    ha2: {
      type: String,
      default:
        "Next, IRCC conducts draws irregularly, so keep a check on the official website.",
    },
    ha3: {
      type: String,
      default:
        "The higher your score, the more likely you are to get an ITA. Improve language skills, gain work experience, and get a higher education.",
    },
    ha4: {
      type: String,
      default: "If you meet the criteria and have a high enough score, you will get an ITA to apply for permanent residence.Click here",
    },
    ha5: {
        type: String,
        default: "You’ll have 60 days to submit your complete application, including documents like identity proof, language test results, and work experience verification.",
      },
      ha6: {
        type: String,
        default: "Once your application is approved, you will receive a Confirmation of Permanent Residence (COPR), allowing you to live and work in Canada permanently.",
      }, 


      
      RefusalHeading: {
        type: String,
        default: "Common Reasons for Refusals in Category-Based Draw",
      },
      r1: {
        type: String,
        default: "Your applicant does not meet the eligibility criteria for the program you are applying for. The eligibility criteria vary depending on the program, but they typically include age, education, work experience, language proficiency, and financial resources.",
      },

      r2: {
        type: String,
        default: "You shared inaccurate and incomplete information on your Express Entry profile.",
      },

      r3: {
        type: String,
        default: "You have failed to meet the minimum language requirements for the program you are applying for.",
      },

      r4: {
        type: String,
        default: "Your CRS Score is not high enough.",
      },

      r5: {
        type: String,
        default: "Failed to submit all of the required documentation with your application.",
      },

      r6: {
        type: String,
        default: "You have a medical condition that could pose a health risk to yourself or others.",
      },


      StillNotSureHeading: {
      type: String,
      default: "Still not sure?",
    },
    StillNotSurePara1: {
      type: String,
      default:
        "If you have received a refusal for any of the reasons mentioned above or have doubts regarding your case and application, do not worry. With over a decade of experience, we specialize in handling Express Entry Programs. Our approval rate for these programs is near 100%. We achieve this with a tailored approach to your specific case. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
    },
    StillNotSurePara2: {
      type: String,
      default:
        "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your PR. Start your process now.",
    },


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
        "What are Category-based draws?",
    },
    qa1: {
      type: String,
      default:
        "  Category-based draws are a type of Express Entry draw where IRCC (Immigration, Refugees and Citizenship Canada) specifically targets candidates with certain skills, qualifications, or experience. This is done to attract the talent that Canada needs to address labor shortages in key sectors.",
    },
    q2: {
      type: String,
      default:
        "What are the different categories of Category-based draws?",
    },
    qa2: {
      type: String,
      default:
        "There are currently six categories of Category-based draws, French-language proficiency, Healthcare occupations, Science, Technology, Engineering, and Math (STEM) occupations, Trade occupations, Transport occupations, and agriculture and agri-food occupations. ",
    },

    q3: {
      type: String,
      default:
        " How are Category-based draws different from general Express Entry draws?",
    },
    qa3: {
      type: String,
      default:
        " General Express Entry draws are conducted regularly and invite candidates based on their Comprehensive Ranking System (CRS) score. Category-based draws, on the other hand, are held on an irregular basis and target specific groups of candidates with desirable skills, qualifications, or experience.",
    },
    q4: {
      type: String,
      default:
        "What are the eligibility criteria for the French-language proficiency category?",
    },
    qa4: {
      type: String,
      default:
        " To be eligible for the French-language proficiency category, you must have CLB level 7 or higher in French. This requirement is based on the Canadian Language Benchmarks (CLB), which are a standardized assessment tool for measuring language proficiency. Here (hyperlink to CLB Calculator), you can find a link to a CLB Calculator. ",
    },
    q5: {
      type: String,
      default:
        "What are the success rates for Category-based draws?",
    },
    qa5: {
      type: String,
      default:
        "The success rates for Category-based draws can vary depending on the specific draw and the number of candidates who apply. However, in general, candidates with strong profiles and high CRS scores have a good chance of receiving an invitation to apply.",
    },
    q6: {
      type: String,
      default:
        " What is the cut-off score for Category-based draws?",
    },
    qa6: {
      type: String,
      default:
        "The cut-off score for Category-based draws is typically lower than the cut-off score for general Express Entry draws. In other words, candidates with lower CRS scores may still be invited to apply for permanent residence through a Category-based draw.",
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
    timestamps: true,
  }
);

let categoryBasedExpressSection = mongoose.model(
  "category Based Express Page",
  categoryBasedExpressSchema
);
module.exports = categoryBasedExpressSection;
