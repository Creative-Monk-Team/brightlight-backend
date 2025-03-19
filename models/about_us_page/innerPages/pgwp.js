let mongoose = require("mongoose");
let pgwpSchema = mongoose.Schema(
  {
    PgwpHeading: {
      type: String,
      default: "Canada’s Post-Graduate Work Permit (PGWP)",
    },
    PgwpPara1: {
      type: String,
      default:
        "If you are an international student who has graduated from a designated learning institution (DLI) in Canada, you may be eligible for a PGWP.",
    },
    PgwpPara2: {
        type: String,
        default:
          "The Post-Graduation Work Permit (PGWP) is a temporary work permit that allows international students who have graduated from a Canadian Designated Learning Institution (DLI) to work in Canada after they graduate for up to 3 years. The PGWP is a valuable opportunity for international students to gain valuable Canadian work experience, which can help them qualify for Canadian Permanent Residence.",
      },
     
   

    //
    BenifitsHeading: {
        type: String,
        default: "Benefits of a Post-Graduate Work Permit (PGWP)",
      },
 
      BenifitsList1: {
        type: String,
        default: "You gain valuable Canadian work experience that can enhance your career prospects and increase your chances of obtaining permanent residency in Canada.",
      }, 
      BenifitsList2: {
        type: String,
        default: "It builds your professional network and you are open to new career opportunities that can help you establish yourself in the Canadian job market.",
      }, 
      BenifitsList3: {
        type: String,
        default: "The PGWP allows you to explore different career options and find a job that aligns with your skills and interests.",
      }, 

    //

        //
        EligibilityHeading: {
            type: String,
            default: "Eligibility Criteria for Post-Graduate Work Permit (PGWP)",
          },

          EligibilitySubHead: {
            type: String,
            default: "Are you eligible for a PGWP? Let's find out.",
          },

          EligLi1: {
            type: String,
            default: "Be a foreign national who has graduated from a qualifying DLI and qualifying program",
          }, 
          EligLi2: {
            type: String,
            default: "Never held a PGWP work permit before.",
          }, 

          EligLi3: {
            type: String,
            default: "Had authorization to study in Canada that expired in the 180 days immediately preceding the PGWP application.",
          }, 

          EligLi4: {
            type: String,
            default: " Must have completed a full-time program of at least eight months, leading to a diploma, certificate, or degree.",
          }, 
          EligiLi5: {
            type: String,
            default: "You must have maintained full-time student status throughout your program of study",
          }, 
          EligLi6: {
            type: String,
            default: "Have a minimum passing grade in your courses.",
          }, 
          EligLi7: {
            type: String,
            default: "Don’t have any criminal convictions.",
          }, 
         
        //
        ChanAnnHeading: {
          type: String,
          default: "Changes were Announced to the Post Graduate Work Permit (PGWP) Eligibility - September 18, 2024",
        }, 
        ChanAnnSubHead: {
          type: String,
          default: "What hasn’t changed",
        },

        caLi1: {
          type: String,
          default: " To be eligible for a PGWP, you must continue to meet the",
        },
        caLi1Sub1: {
          type: String,
          default: "  eligibility requirements (even after November 1, 2024) and complete a study program at a",
        },

        FligSchHeading: {
          type: String,
          default: "Flight School Eligibility:",
        },
        FligSchSubHead: {
          type: String,
          default: "To be eligible for a PGWP as a Flight school graduate must meet the general and program specific requirements listed above, and one of the following:",
        },

        fl1: {
          type: String,
          default: "You completed a flight training course at a DLI training centre and now have a Canadian commercial pilot’s license",
        },
        
        fl2: {
          type: String,
          default: "You have or are in the process of getting an instructor’s rating and a job offer as a flight instructor from a DLIflight training centre.",
        },

       IfYouSumHeading: {
          type: String,
          default: " If you Submitted your Study Permit Application Before November 1, 2024",
        },
        IfYouSumSubHead: {
          type: String,
          default: "<strong>study permit application before November 1, 2024</strong> and are applying for a PGWP on or after November 1, 2024, you must also meet the new requirement that applies to your situation.",
        },
        IysLi1: {
          type: String,
          default: " If you graduated with a bachelor’s degree, master’s degree or doctoral degree from a university:",
        },
        IysLi2: {
          type: String,
          default: "<strong>Language requirement:</strong> You must prove your English or French language skills with a minimum level of Canadian Language Benchmarks (CLB) 7 in English or Niveaux de competence linguistique canadiens (NCLC) 7 in French in all 4 language areas.",
        },
        //

        IfYouSubmitHeading: {
          type: String,
          default: "    If you graduated in any other university program:",
        },

        IfYouSubmitPara: {
          type: String,
          default: " If you submit your study permit application on or after November 1, 2024, you must also meet the new requirements that apply to your situation to be eligible to apply for a PGWP.",
        },
    
        IfYouGraduatedHeading: {
          type: String,
          default: " If you Graduated from a University Bachelor’s degree, Master’s Degree or Doctoral Degree Program:",
        },
        IfYouGraduatedLi1: {
          type: String,
          default: " <strong>Language requirement: </strong> You must prove your English or French language skills with a minimum level of Canadian Language Benchmarks (CLB) 7 in English or Niveaux de competence linguistique canadiens (NCLC) 7 in French in all 4 language areas.",
        },
        IfYouGraduatedLi2: {
          type: String,
          default: " <strong>Field of study requirement:</strong> All fields of study are eligible. There is no additional field of study requirement.",
        },
        //
        
        IfYouGraduatedAnotherHeading: {
          type: String,
          default: "If you Graduated from Any Other University Program:",
        },
        IfYouGradAnothLi1: {
          type: String,
          default: "<strong>Language requirement:</strong> You must prove your English or French language skills with a minimum level of CLB 7 in English or NCLC 7 in French in all 4 language areas.",
        },
        IfYouGradAnothLi2: {
          type: String,
          default: " <strong>Field of study requirement:</strong>  You must graduate in an eligible field of study",
        },
        //
        IfYouGraduatedCollegeHeading: {
          type: String,
          default: "If you graduated from a College Program or Any Other Program Not listed Above:",
        },
        IfYouGradCollLi1: {
          type: String,
          default: "<strong>Language requirement:</strong> You must prove your English or French language skills with a minimum level of CLB 5 in English or NCLC 5 in French in all 4 language areas.",
        },
        IfYouGradCollLi2: {
          type: String,
          default: " <strong>Field of study requirement:</strong>  You must graduate in an eligible field of study",
        },

        FieldStudyRequHeading: {
          type: String,
          default: "Field of Study Requirement",
        },
        FieldStudyRequPara: {
          type: String,
          default: " If your study program has a field of study requirement, you must graduate from a program linked to certain occupations in long-term shortage. The fields of study are divided into 5 broad categories:",
        },
        fsrLi1: {
          type: String,
          default: "Agriculture and Agri-food ",
        },
        fsrLi2: {
          type: String,
          default: "Healthcare ",
        },
        fsrLi3: {
          type: String,
          default: " Science, Technology, Engineering and Mathematics (STEM)",
        },
        fsrLi4: {
          type: String,
          default: "Trade ",
        },
        fsrLi5: {
          type: String,
          default: "Transport ",
        },
        fsrLi6: {
          type: String,
          default: "A copy of your study permit ",
        },

        //
  

    HowApplyHeading: {
      type: String,
      default: "How to Apply for Post-Graduate Work Permit (PGWP)",
    },

    HowApplyPara1: {
        type: String,
        default: "Meet the eligibility criteria? Here’s how you can apply for PGWP:",
      },
      HowApplyPara2: {
        type: String,
        default: "You can apply for a PGWP from inside or outside Canada.",
      },
      HowApplyPara3: {
        type: String,
        default: "Here’s what you will need to provide when you apply for a PGWP",
      },

    ha1: {
      type: String,
      default:
        "Application Location: You can apply for a PGWP from inside or outside Canada.",
    },
    ha2SubHead: {
      type: String,
      default:
        "Required Documents:",
    },
    ha3: {
      type: String,
      default:
        "A copy of your study permit.",
    },
    ha4: {
      type: String,
      default:
        "A copy of your final academic transcripts OR a letter from your school confirming your graduation.",
    },
    ha5: {
        type: String,
        default:
          "A copy of your passport.",
      },

      ha6: {
        type: String,
        default:
          " Valid English or French language skills (IELTS, CELPIP, TEF, TCF)",
      },  

      
      RefusalHeading: {
        type: String,
        default: "Common Reasons for Refusal of Post-Graduate Work Permit (PGWP)",
      },


      RefusalSubHeading: {
        type: String,
        default: "Don’t forget to avoid these common PGWP refusal reasons and increase your chances of approval.",
      },

      r1: {
        type: String,
        default: " You haven’t completed a full-time program of at least eight months at a qualifying DLI.",
      },
      r2: {
        type: String,
        default: "You are only permitted to study part-time during your final semester of study. If you have studied part-time at any other time during your program, your application will be refused.",
      },
      r3: {
        type: String,
        default: "Studying part-time during any period other than the final semester.",
      },
      r4: {
        type: String,
        default: "Your study permit expired before you graduated and you did not apply for an extension or restoration of status.",
      },
      

    StillNotSureHeading: {
      type: String,
      default: "Still Not Sure?",
    },

    StillNotSurePara1: {
      type: String,
      default:
        "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. We have successfully obtained approvals for clients with multiple previous refusals through a tailored approach, addressing each concern listed in previous refusals and using case law as precedents. This high success rate is why our clients trust us.",
    },
    StillNotSurePara2: {
        type: String,
        default: "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Start your process now.",
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
          " What is a PGWP? ",
      },
      qa1: {
        type: String,
        default:
          " The PGWP is a temporary work permit that allows international students who have graduated from a Canadian Designated Learning Institution (DLI) to work in Canada after they graduate.",
      },
      q2: {
        type: String,
        default:
          "  How long is a PGWP valid for?  ",
      },
      qa2: {
        type: String,
        default:
          "The length of your PGWP will depend on the length of your study program: <ul> <li>If your program was less than eight months, you are not eligible for a PGWP.</li> <li>If your program was at least eight months, but less than two years, your PGWP will be valid for up to the same length as your study program.</li> <li>If your program was two years or more, your PGWP will be valid for up to three years.</li> </ul> ",
      },
  
      q3: {
        type: String,
        default:
          " Can I travel outside Canada while I have a PGWP? ",
      },
      qa3: {
        type: String,
        default:
          " Yes, you can travel outside Canada while you have a PGWP. However, you must make sure that your PGWP and TRV are still valid when you return to Canada.  ",
      },
      q4: {
        type: String,
        default:
          "Can I work while I am waiting for my PGWP application to be processed? ",
      },
      qa4: {
        type: String,
        default:
          "   Yes, you can work while you are waiting for your PGWP application to be processed if you have a valid study permit.",
      },
  
      q5: {
        type: String,
        default:
          " What is the processing time for a PGWP application?",
      },
      qa5: {
        type: String,
        default:
          " The processing time for a PGWP application can vary depending on the workload of the IRCC. However, it typically takes 45 days to process an application. You can also obtain one at one of the ports of entry by the process called flagpoling.",
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

let pgwpSection = mongoose.model(
  "Post-Graduate Work Permit (PGWP) Section",
  pgwpSchema
);
module.exports = pgwpSection;
