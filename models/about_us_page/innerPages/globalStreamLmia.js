let mongoose = require("mongoose");

let globalTalentStreamLmiaSchema = mongoose.Schema(
  {
    GTSHeading: {
      type: String,
      default: "Global Talent Stream (GTS) LMIA",
    },
    GTSDescription: {
      type: String,
      default:
        "This type of LMIA stream is designed to expedite the process of hiring foreign workers with exceptional skills and experience in in-demand occupations, including engineers, scientists, and IT professionals. The GTS is a priority stream within the Temporary Foreign Worker Program (TFWP), and it is intended to attract highly skilled workers who can contribute to Canada's economy.",
    },
    GTSBenefitsHeading: {
      type: String,
      default: "Benefits of Global Talent Stream (GTS) LMIA",
    },
    
    GTSBenefitsLis1: {
        type: String,
        default: "GTS LMIAs are typically processed within 10 business days",
      },

      GTSBenefitsLis2: {
        type: String,
        default: "Faster processing of work permits with GTS LMIA.",
      },
    
      GTSBenefitsLis3: {
        type: String,
        default: "Using this LMIA, foreign workers can stay in Canada as workers for up to three years, with many options to extend or transition to permanent resident status.",
      },
    
      GTSBenefitsLis4: {
        type: String,
        default: "No or minimal recruitment efforts are required to obtain LMIA approval.",
      },
    
    
    GTSEligibilityHeading: {
      type: String,
      default: "Eligibility Criteria for Global Talent Stream (GTS) LMIA",
    },

    GTSEligibilitySubHeading1: {
        type: String,
        default: "Global Talent Stream Categories:",
      },
      GTSEligibilitySubHeading2: {
        type: String,
        default: "The Global Talent Stream consists of two categories with their own set of requirements:",
      },
//


GTSCategoryAPreviewHeading: {
    type: String,
    default: "Category A - Referred by one of the stream's designated referral partners",
  },
  GTSCategoryBPreviewHeading: {
    type: String,
    default: "Category B - In-demand occupations on the global talent occupations list",
  },

      //

    GTSCategoryAHeading: {
      type: String,
      default: "Category A - Referred by one of the stream's designated referral partners",
    },
    GTSCategoryADescription: {
      type: String,
      default:
        "If you've been referred by a designated referral partner and are hiring someone with unique, specialized talent, your application will fall under Category A.",
    },
    GTSCategoryAList1: {
        type: String,
        default: "The employer company must be based in Canada.",
      },
      GTSCategoryAList2: {
        type: String,
        default: "The company should focus on innovation and be willing and able to grow.",
      },

      GTSCategoryAList3: {
        type: String,
        default: "The position must require advanced industry knowledge and a relevant advanced degree, or a minimum of 5 years of specialized experience. The employer must offer a minimum of $38.46 per hour ($80,000 annual base salary) or the equivalent of the prevailing wage for the occupation.",
      },

      GTSCategoryAList4: {
        type: String,
        default: "The employer must have identified a qualified temporary foreign worker (TFW) to hire for this position.",
      },


    GTSCategoryBHeading: {
      type: String,
      default: "Category B - In-demand occupations on the global talent occupations list",
    },
    GTSCategoryBDescription: {
      type: String,
      default:
        "If you're seeking to hire highly skilled temporary foreign workers (TFWs) to fill in-demand positions, you may qualify for Category B.",
    },
 
    GTSCategoryBTableHeading: {
        type: String,
        default: "Here's the list of occupations allowed under the Global Talent Stream:",
      },



      GSTCategoryBInnerHeading1:{
        type: String,
        default:"NOC Code",
      },
      GSTCategoryBInnerHeading2:{
        type: String,
        default:"Job Title",
      },

      GSTCategoryBINoc1:{
        type: String,
        default:"20012",
      },
      GSTCategoryBINoc2:{
        type: String,
        default:"21300",
      },
      GSTCategoryBINoc3:{
        type: String,
        default:"21310",
      },
      GSTCategoryBINoc4:{
        type: String,
        default:"21330",
      },
      GSTCategoryBINoc5:{
        type: String,
        default:"21390",
      },
      GSTCategoryBINoc6:{
        type: String,
        default:"21311",
      },
      GSTCategoryBINoc7:{
        type: String,
        default:"21210",
      },
      GSTCategoryBINoc8:{
        type: String,
        default:"21211",
      },
      GSTCategoryBINoc9:{
        type: String,
        default:"21220",
      },
      GSTCategoryBINoc10:{
        type: String,
        default:"21221",
      },
      GSTCategoryBINoc11:{
        type: String,
        default:"21222",
      },
      GSTCategoryBINoc12:{
        type: String,
        default:"21223",
      },
      GSTCategoryBINoc13:{
        type: String,
        default:"21223",
      },
      GSTCategoryBINoc14:{
        type: String,
        default:"21231",
      },
      GSTCategoryBINoc15:{
        type: String,
        default:"21230",
      },
      GSTCategoryBINoc16:{
        type: String,
        default:"21232",
      },
      GSTCategoryBINoc17:{
        type: String,
        default:"21234",
      },
      GSTCategoryBINoc18:{
        type: String,
        default:"22310",
      },
      GSTCategoryBINoc19:{
        type: String,
        default:"22220",
      },
      GSTCategoryBINoc20:{
        type: String,
        default:"22222",
      },
      GSTCategoryBINoc21:{
        type: String,
        default:"51120",
      },
      GSTCategoryBINoc22:{
        type: String,
        default:"52120",
      },

      GSTCategoryBIJob1:{
        type: String,
        default:"Computer and information systems managers",
      },
      GSTCategoryBIJob2:{
        type: String,
        default:"Civil engineers",
      }, 
        GSTCategoryBIJob3:{
        type: String,
        default:"Electrical and electronics engineers",
      },
      GSTCategoryBIJob4:{
        type: String,
        default:"Mining engineers",
      },
      GSTCategoryBIJob5:{
        type: String,
        default:"Aerospace engineers",
      },
      GSTCategoryBIJob6:{
        type: String,
        default:"Computer engineers",
      },
      GSTCategoryBIJob7:{
        type: String,
        default:"Mathematicians and statisticians",
      },
      GSTCategoryBIJob8:{
        type: String,
        default:"Data scientists",
      },
      GSTCategoryBIJob9:{
        type: String,
        default:"Cybersecurity specialists",
      },
      GSTCategoryBIJob10:{
        type: String,
        default:"Business system specialists",
      },
      GSTCategoryBIJob11:{
        type: String,
        default:"Information systems specialists",
      },
      GSTCategoryBIJob12:{
        type: String,
        default:"Web designers",
      },
      GSTCategoryBIJob13:{
        type: String,
        default:"Database analysts and data administrators",
      },
      GSTCategoryBIJob14:{
        type: String,
        default:"Software engineers and designers",
      },
      GSTCategoryBIJob15:{
        type: String,
        default:"Computer systems developers and programmers",
      },
      GSTCategoryBIJob16:{
        type: String,
        default:"Software developers and programmers",
      },
      GSTCategoryBIJob17:{
        type: String,
        default:"Web developers and programmers",
      },
      GSTCategoryBIJob18:{
        type: String,
        default:"Electrical and electronics engineering technologists and technicians",
      },
      GSTCategoryBIJob19:{
        type: String,
        default:"Computer network technicians",
      },
      GSTCategoryBIJob20:{
        type: String,
        default:"Information systems testing technicians",
      },
      GSTCategoryBIJob21:{
        type: String,
        default:"Producer, technical, creative, and artistic director, and project manager – Visual effects and video game",
      },
      GSTCategoryBIJob22:{
        type: String,
        default:"Digital media designers",
      },
//
    LMBPHeading: {
      type: String,
      default: "Labour Market Benefits Plan (LMBP)",
    },
    LMBPDescription: {
      type: String,
      default: "The Labour Market Benefits Plan (LMBP) is a mandatory component of the Global Talent Stream (GTS) application process. It requires employers to outline specific activities they will undertake to create positive outcomes for the Canadian labor market as a result of hiring a foreign worker.",
    },
    LMBPHListIntro1: {
      type: String,
      default: "The LMBP consists of 1 mandatory activity and at least 2 supplementary activities:",
    },
    LMBPList1: {
        type: String,
        default: "Category A: The employer must create jobs for Canadian citizens and permanent residents.",
      },
      LMBPList2: {
        type: String,
        default: "Category B: The employer must invest in the training and skill improvement of Canadian citizens and permanent residents.",
      },

      LMBPHListIntro2: {
        type: String,
        default: "Examples of supplementary activities include:",
      },

      LMBPExList1: {
        type: String,
        default: "Increasing the number of Canadians and permanent residents employed full-time and part-time.",
      },
      
      LMBPExList2: {
        type: String,
        default: "Establishing or enhancing educational partnerships with local or regional post-secondary institutions or other organizations supporting skills and training.",
      },
      
      LMBPExList3: {
        type: String,
        default: "Providing paid co-op or internship opportunities.",
      },
      
      LMBPExList4: {
        type: String,
        default: "Developing, implementing, or participating in initiatives that increase the participation of underrepresented groups in the workplace.",
      },
      
      LMBPExList5: {
        type: String,
        default: "Providing direct training aimed at improving skills, including supporting employees to travel to and attend industry or industry sector conferences relevant to the development of their specialized skillset.",
      },
      
      LMBPExList6: {
        type: String,
        default: "Ensuring that the foreign worker will supervise and mentor Canadian workers to support knowledge transfer.",
      },
      
      LMBPExList7: {
        type: String,
        default: "Increasing the growth of revenue, employment, or investment at the firm.",
      },
      
      LMBPExList8: {
        type: String,
        default: "Developing or improving best company practices or policies related to the attraction and retention of the Canadian workforce.",
      },
      
      LMBPExList9: {
        type: String,
        default: "Developing or enhancing partnerships with organizations that assist with identifying top domestic capital.",
      },



    HowToApplyHeading: {
      type: String,
      default: "How to Apply for Global Talent Stream (GTS) LMIA",
    },
    HowToApplyList1: {
        type: String,
        default: "Have an initial assessment performed by us to verify if the employer is eligible to apply for LMIA for a specific position and how many positions are allowed.",
      },
      HowToApplyList2: {
        type: String,
        default: "We will provide you with a checklist of documents and information required to start the initial process.",
      },
      HowToApplyList3: {
        type: String,
        default: "While there is no minimum recruitment requirement for the GTS, it is recommended to perform recruitment efforts. They do not need to meet the criteria of high-wage recruitment and advertising efforts guidelines set by ESDC.",
      },
      HowToApplyList4: {
        type: String,
        default: "Prepare the Labour Market Benefits Plan according to the category GTS LMIA application is to be applied under.",
      },
      HowToApplyList5: {
        type: String,
        default: "Interview local applicants.",
      },
      HowToApplyList6: {
        type: String,
        default: "Prepare and submit an LMIA application to the Service Canada ESDS department.",
      },
      HowToApplyList7: {
        type: String,
        default: "Wait for LMIA processing time, which can range from 7 to 10 business days. If the Service.",
      },
      
    HowToApplyPara: {
        type: String,
        default: "Canada officer has any questions or concerns or requires any further information, the employer might be contacted for an interview.",
      },
    

    RefusalHeading: {
      type: String,
      default: "Common Reasons for Refusal of Global Talent Stream (GTS) LMIA",
    },
    Refusallist1: {
        type: String,
        default: "Insufficient Evidence of Labour Market Benefits A Labour Market Benefits Plan (LMBP) submitted by the employer may lack clear and substantive activities aimed at benefiting the Canadian labor market. ESDC assesses the proposed activities to ensure they contribute to skills development, job creation, or other positive outcomes for Canadians.",
      },
      Refusallist2: {
        type: String,
        default: "Provided false, misleading, or inaccurate information in the LMIA application.",
      },
      Refusallist3: {
        type: String,
        default: "Have been found non-compliant as a result of an employer compliance review.",
      },
      Refusallist4: {
        type: String,
        default: "Have been banned from the Temporary Foreign Worker Program because non-compliance was discovered during an inspection.",
      },
      Refusallist5: {
        type: String,
        default: "Are in default of payment of an administrative monetary penalty.",
      },
  


    StillNotSureHeading: {
      type: String,
      default: "Still Not Sure?",
    },
    StillNotSurePara1: {
      type: String,
      default:
        "If you have received a refusal for any of the reasons mentioned above, do not worry. With over a decade of experience, we specialize in previously refused cases. While we don't provide jobs for LMIA, we can assist you if you have a job offer.",
    },
    StillNotSurePara2: {
        type: String,
        default:
          "We have obtained approvals for clients who had multiple previous refusals. We achieve this with a tailored approach to your specific case, addressing each concern that the officer has listed in previous refusals. We use case law and find similar cases to your circumstances that had positive results, and we use them as precedents in cases we work on. This is why we have a high success rate.",
      },
      StillNotSurePara3: {
        type: String,
        default:
          "At Brightlight Immigration, we have a dedicated team of visa application specialists who can assist you from the start of the application process to obtaining your visa. Start your process now.",
      },
    
    WhyChooseUsHeading: {
      type: String,
      default: "Why Choose Us",
    },
    WhyChooseUsPara: {
      type: String,
      default:
        "At Brightlight Immigration, we offer comprehensive services and a high success rate due to our tailored approach and expert knowledge in immigration law. We provide step-by-step guidance through the entire process, ensuring that every aspect of your application is handled with the utmost care.",
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
        "How long does it take to process the Global Talent Stream (GTS) Labour Market Impact Assessment (LMIA)?  ",
    },
    qa1: {
      type: String,
      default:
        " GTS LMIA application processing time is faster than any other type of application, which can range from 7 to 10 business days. If the Service Canada officer has any questions or concerns or requires any further information, the employer might be contacted for an interview.",
    },
    q2: {
      type: String,
      default:
        " How long will the work permit application take if applying with a Global Talent Stream (GTS) Labour Market Impact Assessment:  ",
    },
    qa2: {
      type: String,
      default:
        " Immigration, Refugees, and Citizenship Canada (IRCC) often accelerate the processing of work permits for approved applicants, completing the procedure within 10 business days around 80% of the time. ",
    },

    q3: {
      type: String,
      default:
        " How does GTS LMIA expedite the process of obtaining work permits for foreign workers? ",
    },
    qa3: {
      type: String,
      default:
        " GTS LMIA applications do not require the employer to advertise for 4 weeks like other streams do, as it exempts the employer from advertisement requirements.",
    },
    q4: {
      type: String,
      default:
        " What is the difference between high-wage LMIA and Global Talent Stream (GTS) Labour Market Impact Assessment (LMIA)? ",
    },
    qa4: {
      type: String,
      default:
        " GTS LMIA has fewer recruitment effort requirements and much faster processing time for both LMIA and work permits. Also, the success rate is better than the other types of applications.  ",
    },

    q5: {
      type: String,
      default:
        "What is a Labour Market Benefits Plan (LMBP)? ",
    },
    qa5: {
      type: String,
      default:
        " The LMBP is a mandatory component of the GTS application, requiring employers to outline specific activities that will create positive outcomes for the Canadian labor market as a result of hiring foreign workers. It consists of a mandatory activity and supplementary activities tailored to each category.",
     },
    q6: {
      type: String,
      default:
        " How is employer compliance monitored in the Global Talent Stream?",
    },
    qa6: {
      type: String,
      default:
        "Employers must comply with federal, provincial, and territorial laws regulating employment and recruiting. They are also required to maintain records associated with the GTS application for 6 years and execute the activities outlined in the LMBP. Failure to comply may result in penalties and ineligibility for future GTS applications. ",
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
    timestamps: true,
  }
);

let globalTalentStreamLmiaSection = mongoose.model(
  "Global Talent Stream Lmia Section",
  globalTalentStreamLmiaSchema
);
module.exports = globalTalentStreamLmiaSection;
